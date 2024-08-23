// Importa o módulo Express para criar a aplicação e gerenciar rotas
const express = require('express');

// Cria uma instância do roteador usando Express
const router = express.Router();

// Importa a função de controle para gerenciar a rota de login
const { login } = require("../controller/loginController");

// Define a rota POST para '/login'. Quando um pedido POST é feito para essa rota, a função 'login' é chamada
router.post('/login', login);

// Exporta o roteador para que possa ser usado em outros arquivos do projeto
module.exports = router;
