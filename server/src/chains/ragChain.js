import ragPrompt from "../prompts/ragPrompt.js";
import chatModel from "../llms/chatModel.js";

const ragChain = ragPrompt.pipe(chatModel);

export default ragChain;