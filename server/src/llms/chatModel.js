import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { GOOGLE_API_KEY } from "../config/env.js";
import { chatResponseSchema } from "../schema/chatResponseSchema.js";

const model = new ChatGoogleGenerativeAI({
  // model: "gemini-3.5-flash",
  model: "gemini-2.5-flash",
  apiKey: GOOGLE_API_KEY,
  temperature: 0.2,
});

const chatModel = model.withStructuredOutput(chatResponseSchema).withConfig({
  streaming: true,
});

export default chatModel;
