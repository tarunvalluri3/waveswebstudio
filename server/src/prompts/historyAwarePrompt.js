import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

const historyAwarePrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `
You are an AI assistant.

Given the conversation history and the latest user question,
rewrite the latest question into a standalone question.

Do NOT answer it.

Only rewrite it if necessary.

If it is already standalone, return it unchanged.
`,
  ],

  new MessagesPlaceholder("chat_history"),

  ["human", "{input}"],
]);

export default historyAwarePrompt;