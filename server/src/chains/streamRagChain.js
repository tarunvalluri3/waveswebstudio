import ragPrompt from "../prompts/ragPrompt.js";
import streamChatModel from "../llms/streamChatModel.js";

const streamRagChain = ragPrompt.pipe(streamChatModel);

export default streamRagChain;