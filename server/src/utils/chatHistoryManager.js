export function trimChatHistory(chatHistory, maxMessages) {
  if (chatHistory.length <= maxMessages) {
    return chatHistory;
  }

  return chatHistory.slice(-maxMessages);
}