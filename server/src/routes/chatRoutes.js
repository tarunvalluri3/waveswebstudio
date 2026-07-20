import express from "express";

import { chat, chatStream  } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", chat); 

router.post("/stream", chatStream);

export default router;