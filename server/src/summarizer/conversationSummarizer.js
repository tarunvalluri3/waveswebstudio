import chatModel from "../llms/chatModel.js";

export async function summarizeConversation(messages) {
  const conversation = messages
    .map((message) => `${message.role}: ${message.content}`)
    .join("\n");

  const response = await chatModel.invoke(`
Summarize the following conversation.

Keep only important facts.

Conversation:

${conversation}
`);

  return response.content;
}