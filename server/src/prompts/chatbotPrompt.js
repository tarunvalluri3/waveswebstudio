import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

const chatbotPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `
You are a professional AI assistant.

Answer clearly and accurately.

If you don't know the answer, say you don't know.

Always return valid structured output.
`,
  ],

  new MessagesPlaceholder("chat_history"),

  ["human", "{input}"],
]);

export default chatbotPrompt;