import multer from "multer";

// Armazena o arquivo em memória como um Buffer de objetos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default upload;