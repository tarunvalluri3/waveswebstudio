import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

const ChatMessages = ({ messages, onRetry, onSelectSuggestion }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const lastMessage = messages[messages.length - 1];
  const showSuggestions =
    messages.length === 0 || (lastMessage?.role === "assistant" && lastMessage.status === "done");

  return (
    <div className="no-scrollbar flex-1 overflow-y-auto bg-white px-4 py-4">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} onRetry={onRetry} />
        ))}
      </div>

      {showSuggestions && <SuggestedQuestions onSelect={onSelectSuggestion} />}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessages;
