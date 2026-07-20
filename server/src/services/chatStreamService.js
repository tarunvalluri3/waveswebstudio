import { historyAwareRetrieve } from "../retrievers/historyAwareRetriever.js";
import { getChatHistory } from "../memory/chatMemory.js";
import streamRagChain from "../chains/streamRagChain.js";

export async function streamMessage({ sessionId, message }) {
  const history = await getChatHistory(sessionId);

  const documents = await historyAwareRetrieve({
    message,
    chatHistory: history,
  });

  const context = documents.map((document) => document.content).join("\n\n");
  const stream = await streamRagChain.stream({
    input: message,
    context,
    chat_history: history,
  });

  return {
    stream,
    history,
  };
}
