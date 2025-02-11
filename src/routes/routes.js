import express from "express";

import UploadController from "../controllers/UploadController";

// Inicia o router
const router = express.Router();

// Endereço do endpoint
router.post("/upload-file", UploadController.uploadFile);

export default router;