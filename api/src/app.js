// Importar o pacote express (servidor)
const express = require('express');

// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 3005);

module.exports = app;