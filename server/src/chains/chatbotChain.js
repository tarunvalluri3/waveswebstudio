import chatbotPrompt from "../prompts/chatbotPrompt.js";
import chatModel from "../llms/chatModel.js";
import chatbotParser from "../parsers/chatbotParser.js";

const chatbotChain = chatbotPrompt
  .pipe(chatModel)
  .pipe(chatbotParser);

export default chatbotChain;