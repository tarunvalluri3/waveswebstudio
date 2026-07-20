import logger from "../utils/logger.js";

export default function errorHandler(error, req, res, next) {
  logger.error(error.stack);

  return res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
}