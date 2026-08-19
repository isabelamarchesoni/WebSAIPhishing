import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(path.join(__dirname, "dados.db"));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cpf TEXT NOT NULL,
      senha TEXT NOT NULL,
      criado_em TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Rota raiz para tirar o erro 404 ao acessar http://localhost:3001/
app.get("/", (req, res) => {
  res.send("Servidor rodando perfeitamente!");
});

// Rota de cadastro
app.post("/api/cadastrar", (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ erro: "CPF e senha são obrigatórios." });
  }

  const query = "INSERT INTO usuarios (cpf, senha) VALUES (?, ?)";

  db.run(query, [cpf.trim(), senha], function (err) {
    if (err) {
      console.error("Erro no BD:", err.message);
      return res.status(500).json({ erro: "Erro ao salvar no banco de dados." });
    }

    res.status(201).json({
      ok: true,
      id: this.lastID,
      redirectUrl: "https://websai.cps.sp.gov.br/" 
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});