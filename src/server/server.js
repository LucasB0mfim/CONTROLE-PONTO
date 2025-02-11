import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import config from "../config/cors.js";
import router from "../routes/routes.js";

// Chaves de acesso ao banco de dados
dotenv.config();

// Inicia o express
const app = express();

// Converte para json
app.use(express.json());

// Define as configurações de acesso aos endpoints
app.use(cors(config));

// Define o endereço base dos endpoints
app.use("/same-engenharia/api", router);

// Define a porta do servidor
const PORT = process.env.SP;

// Fica escutando a porta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});

export default app;