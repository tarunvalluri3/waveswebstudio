import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

import { GOOGLE_API_KEY } from "../config/env.js";

const embeddingModel = new GoogleGenerativeAIEmbeddings({
  apiKey: GOOGLE_API_KEY,
  model: "gemini-embedding-001",
  // outputDimensionality: 768,
});

export default embeddingModel;