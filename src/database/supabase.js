import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Busca as chaves de acesso no arquivo .env
dotenv.config();

// Chaves de acesso ao banco de dados
const supabase = createClient(
    process.env.SB_URL,
    process.env.SB_KEY
);

export default supabase;