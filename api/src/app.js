// Configura a aplicação Express e registra as rotas.

// Importa o módulo Express para criar a aplicação e gerenciar rotas
const express = require('express');

// Importa o módulo CORS para permitir compartilhamento de recursos entre diferentes origens
const cors = require('cors');

// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

const path = require("path");
const fs = require("fs");
const fileUpload = require("express-fileupload");

// Importa os roteadores definidos para gerenciar diferentes partes da aplicação
const blogRouter = require('./routes/blogRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

// Cria uma instância da aplicação Express
const app = express();

// Define a porta na qual o servidor vai escutar. Usa o valor definido em process.env.PORT ou 3005 como padrão
app.set('port', process.env.PORT || 3005);

// Configura a aplicação para usar o middleware express.json(), que analisa o corpo das requisições em JSON
app.use(express.json());

// Configura a aplicação para usar o middleware cors(), que permite que recursos sejam compartilhados entre diferentes origens
app.use(cors());

// Define o diretório 'uploads' como estático, permitindo que arquivos sejam acessados publicamente via HTTP
app.use('/uploads', express.static(__dirname + '\\uploads'));


// Configura a aplicação para usar o fileUpload(), que facilita o upload de arquivos no servidor
app.use(fileUpload());

// Configura as rotas para o caminho '/api'. Associa os roteadores importados a esse caminho
app.use('/api', blogRouter);
app.use('/api', usersRouter);
app.use('/api', loginRouter);

// Exporta a instância da aplicação para que possa ser usada em outros arquivos, como no arquivo que inicia o servidor
module.exports = app;
