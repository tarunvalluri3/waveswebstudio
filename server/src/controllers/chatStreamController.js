import { streamMessage } from "../services/chatStreamService.js";
import logger from "../utils/logger.js";

export async function streamChat(req, res) {
  try {
    const { sessionId, message } = req.body;

    const stream = await streamMessage({
      sessionId,
      message,
    });

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of stream) {
      res.write(chunk);
    }

    res.end();
  } catch (error) {
    logger.error("Streaming Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Streaming failed.",
    });
  }
}