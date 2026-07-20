import {
  createSession,
  saveMessage,
  getMessages,
  getSummary,
} from "../database/chatMemoryRepository.js";

import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";

import { MAX_HISTORY_MESSAGES } from "../config/chatConfig.js";

export async function getChatHistory(sessionId) {
  const summary = await getSummary(sessionId);

  const messages = await getMessages(sessionId);

  const recentMessages = messages.slice(-MAX_HISTORY_MESSAGES);

  const history = [];

  if (summary) {
    history.push(new SystemMessage(`Conversation Summary:\n${summary}`));
  }

  for (const message of recentMessages) {
    if (message.role === "human") {
      history.push(new HumanMessage(message.content));
    } else {
      history.push(new AIMessage(message.content));
    }
  }

  return history;
}

export async function addHumanMessage(sessionId, message) {
  await createSession(sessionId);

  await saveMessage({
    sessionId,
    role: "human",
    content: message,
  });
}

export async function addAIMessage(sessionId, message) {
  await saveMessage({
    sessionId,
    role: "ai",
    content: message,
  });
}
