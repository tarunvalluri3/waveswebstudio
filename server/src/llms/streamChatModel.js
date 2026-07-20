import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { GOOGLE_API_KEY } from "../config/env.js";

const streamChatModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: GOOGLE_API_KEY,
  temperature: 0.2,
});

export default streamChatModel;