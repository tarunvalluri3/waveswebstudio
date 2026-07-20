import chatModel from "../llms/chatModel.js";
import historyAwarePrompt from "../prompts/historyAwarePrompt.js";

import { retrieveDocuments } from "./retriever.js";

export async function historyAwareRetrieve({
  message,
  chatHistory,
}) {
  const prompt = await historyAwarePrompt.invoke({
    input: message,
    chat_history: chatHistory,
  });

  const rewrittenQuestion = await chatModel.invoke(prompt);

  const documents = await retrieveDocuments(
    rewrittenQuestion.answer
  );

  return documents;
}