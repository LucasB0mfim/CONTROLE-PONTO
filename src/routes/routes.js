import express from "express";

import UploadController from "../controllers/UploadController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/upload-file", upload.single("file"), UploadController.uploadFile);

export default router;