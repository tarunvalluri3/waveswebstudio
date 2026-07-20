import { useCallback, useEffect, useRef, useState } from "react";
import { streamChatMessage } from "../services/chatApi";

const SESSION_STORAGE_KEY = "wws_chat_session_id";

function getOrCreateSessionId() {
  const existing = localStorage.getItem(SESSION_STORAGE_KEY);

  if (existing) return existing;

  const sessionId = crypto.randomUUID();

  localStorage.setItem(SESSION_STORAGE_KEY, sessionId);

  return sessionId;
}

export function useChat() {
  const [sessionId, setSessionId] = useState(getOrCreateSessionId);
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (!isOpen && lastMessage?.role === "assistant" && lastMessage.status === "done") {
      setHasUnread(true);
    }
  }, [messages, isOpen]);

  const updateMessage = useCallback((id, updater) => {
    setMessages((prev) =>
      prev.map((message) => (message.id === id ? updater(message) : message)),
    );
  }, []);

  const runStream = useCallback(
    async (text) => {
      const userMessage = { id: crypto.randomUUID(), role: "user", content: text, status: "done" };
      const assistantId = crypto.randomUUID();
      const assistantMessage = { id: assistantId, role: "assistant", content: "", status: "pending" };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setIsSending(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        await streamChatMessage({
          sessionId,
          message: text,
          signal: controller.signal,
          onChunk: (chunk) => {
            updateMessage(assistantId, (message) => ({
              ...message,
              content: message.content + chunk,
              status: "streaming",
            }));
          },
        });

        updateMessage(assistantId, (message) => ({
          ...message,
          status: message.content ? "done" : "error",
          content: message.content || "I didn't get a response. Please try again.",
        }));
      } catch (error) {
        if (error.name === "AbortError") return;

        updateMessage(assistantId, (message) => ({
          ...message,
          status: "error",
          content: "Something went wrong. Please try again.",
        }));
      } finally {
        setIsSending(false);
      }
    },
    [sessionId, updateMessage],
  );

  const sendMessage = useCallback(
    (text) => {
      const trimmed = text.trim();

      if (!trimmed || isSending) return;

      runStream(trimmed);
    },
    [isSending, runStream],
  );

  const retryMessage = useCallback(
    (assistantId) => {
      if (isSending) return;

      const index = messages.findIndex((message) => message.id === assistantId);
      const userMessage = messages[index - 1];

      if (!userMessage) return;

      setMessages((prev) => prev.filter((message) => message.id !== assistantId));

      runStream(userMessage.content);
    },
    [isSending, messages, runStream],
  );

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;

      if (next) setHasUnread(false);

      return next;
    });
  }, []);

  const closeChat = useCallback(() => setIsOpen(false), []);

  const startNewChat = useCallback(() => {
    abortControllerRef.current?.abort();

    const newSessionId = crypto.randomUUID();

    localStorage.setItem(SESSION_STORAGE_KEY, newSessionId);
    setSessionId(newSessionId);
    setMessages([]);
    setIsSending(false);
  }, []);

  const endChat = useCallback(() => {
    abortControllerRef.current?.abort();

    localStorage.removeItem(SESSION_STORAGE_KEY);
    setMessages([]);
    setIsSending(false);
    setIsOpen(false);
  }, []);

  return {
    sessionId,
    messages,
    isOpen,
    isSending,
    hasUnread,
    sendMessage,
    retryMessage,
    toggleOpen,
    closeChat,
    startNewChat,
    endChat,
  };
}
