import { sendMessage } from "../services/chatService.js";

import { streamMessage } from "../services/chatStreamService.js";

import logger from "../utils/logger.js";

import { addHumanMessage, addAIMessage } from "../memory/chatMemory.js";

export async function chat(req, res, next) {
  try {
    const { sessionId, message } = req.body;

    const response = await sendMessage({
      sessionId,
      message,
    });

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

export async function chatStream(req, res, next) {
  try {
    const { sessionId, message } = req.body;

    const { stream } = await streamMessage({
      sessionId,
      message,
    });

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    let completeAnswer = "";

    for await (const chunk of stream) {
      const text = chunk.content ?? "";

      if (!text) {
        continue;
      }

      completeAnswer += text;

      res.write(text);
    }

    res.end();

    await addHumanMessage(sessionId, message);

    await addAIMessage(sessionId, completeAnswer);
  } catch (error) {
    next(error);
  }
}
