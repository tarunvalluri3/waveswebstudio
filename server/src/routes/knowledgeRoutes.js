import express from "express";

import {
  uploadPDF,
  uploadWebsite,
  getKnowledge,
  removeKnowledge,

} from "../controllers/knowledgeController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getKnowledge);

router.post("/pdf", upload.single("pdf"), uploadPDF);

router.post("/website", uploadWebsite); 

router.delete("/:id", removeKnowledge);

export default router;
