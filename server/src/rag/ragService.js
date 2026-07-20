import ragChain from "../chains/ragChain.js";
import { historyAwareRetrieve } from "../retrievers/historyAwareRetriever.js";

export async function askKnowledgeBase({ message, chatHistory }) {
  const documents = await historyAwareRetrieve({
    message,
    chatHistory,
  });

  const context = documents
    .map((document) => document.content)
    .join("\n\n");

  const response = await ragChain.invoke({
    input: message,
    context,
    chat_history: chatHistory,
  });

  const uniqueSources = [
    ...new Map(
      documents.map((document) => [
        `${document.source_type}-${document.source_name}`,
        {
          type: document.source_type,
          name: document.source_name,
        },
      ]),
    ).values(),
  ];

  response.sources = uniqueSources;

  return response;
}