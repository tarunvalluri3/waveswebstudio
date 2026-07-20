import { askKnowledgeBase } from "../rag/ragService.js";

import {
  getChatHistory,
  addHumanMessage,
  addAIMessage,
} from "../memory/chatMemory.js";

import { summarizeConversation } from "../summarizer/conversationSummarizer.js";

import { getMessages, saveSummary } from "../database/chatMemoryRepository.js";

import { MAX_HISTORY_MESSAGES } from "../config/chatConfig.js";

import logger from "../utils/logger.js";

import { trimChatHistory } from "../utils/chatHistoryManager.js";

export async function sendMessage({ sessionId, message }) {
  try {
    const start = Date.now();

    logger.info(`Session: ${sessionId}`);
    logger.info(`Question: ${message}`);

    let history = await getChatHistory(sessionId);

    history = trimChatHistory(history, MAX_HISTORY_MESSAGES);

    const response = await askKnowledgeBase({
      message,
      chatHistory: history,
    });

    await addHumanMessage(sessionId, message);

    await addAIMessage(sessionId, response.answer);

    const messages = await getMessages(sessionId);

    if (messages.length > MAX_HISTORY_MESSAGES) {
      const summary = await summarizeConversation(messages);

      await saveSummary(sessionId, summary);
    }

    const end = Date.now();

    logger.info(`Response Time: ${end - start} ms`);

    return response;
  } catch (error) {
    logger.error(error.stack);

    throw error;
  }
}
