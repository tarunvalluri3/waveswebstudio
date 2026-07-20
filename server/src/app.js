import express from "express";
import cors from "cors";

import { PORT } from "./config/env.js";

import logger from "./utils/logger.js";

import chatRoutes from "./routes/chatRoutes.js";
import knowledgeRoutes from "./routes/knowledgeRoutes.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/knowledge", knowledgeRoutes);

app.get("/", (req, res) => {
  res.send("LangChain Chatbot API is running...");
});

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
