import { ingestPDF, ingestWebsite } from "../rag/ingestionService.js";
import {
  getKnowledgeSources,
  deleteKnowledge,
} from "../services/knowledgeService.js";

import logger from "../utils/logger.js";

export async function uploadPDF(req, res, next) {
  try {
    await ingestPDF(req.file.path);

    return res.status(200).json({
      success: true,
      message: "PDF uploaded successfully.",
    });
  } catch (error) {
    next(error);
  }
}

export async function uploadWebsite(req, res, next) {
  try {
    const { url } = req.body;

    await ingestWebsite(url);

    return res.status(200).json({
      success: true,
      message: "Website ingested successfully.",
    });
  } catch (error) {
    next(error);
  }
}

export async function getKnowledge(req, res, next) {
  try {
    const knowledge = await getKnowledgeSources();

    return res.status(200).json({
      success: true,
      data: knowledge,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeKnowledge(req, res, next) {
  try {
    const { id } = req.params;

    await deleteKnowledge(id);

    return res.status(200).json({
      success: true,
      message: "Knowledge deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
}
