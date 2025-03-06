const express = require("express");

// Cria uma instância do Express
const app = express();

// Define uma porta para o servidor
const PORT = 3000;

// Rota inicial (endpoint raiz)
app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 