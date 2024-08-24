// Gerencia posts do blog.

// Importa a conexão com o banco de dados do módulo de configuração
const connection = require('../config/db');

// Importa e carrega as variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

// Função assíncrona para armazenar um novo blog no banco de dados
async function storeBlog(request, response) {
    // Cria um array com os parâmetros a serem inseridos no banco de dados
    const params = Array(
        request.body.titulo,    // Título do blog, obtido do corpo da requisição
        request.body.autor,     // Autor do blog, obtido do corpo da requisição
        request.body.conteudo   // Conteúdo do blog, obtido do corpo da requisição
    );
    
    // Define a consulta SQL para inserir um novo blog na tabela
    const query = "INSERT INTO blog(titulo, autor, conteudo) VALUES(?, ?, ?)";
    
    // Executa a consulta no banco de dados
    connection.query(query, params, (err, results) => {
        // Verifica se houve um erro na execução da consulta
        if (results) {
            // Se a consulta for bem-sucedida, envia uma resposta de sucesso com os dados retornados
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            // Se houver um erro, envia uma resposta de erro com detalhes do erro
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            });
        }
    });
}

// Função assíncrona para obter todos os blogs do banco de dados
async function getBlog(request, response) {
    // Define a consulta SQL para selecionar todos os blogs da tabela
    const query = "SELECT * FROM blog";
    
    // Executa a consulta no banco de dados
    connection.query(query, (err, results) => {
        // Verifica se houve um erro na execução da consulta
        if (results) {
            // Se a consulta for bem-sucedida, envia uma resposta de sucesso com os dados retornados
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            // Se houver um erro, envia uma resposta de erro com detalhes do erro
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            });
        }
    });
}

// Exporta as funções para que possam ser usadas em outros arquivos do projeto
module.exports = {
    storeBlog,
    getBlog
};
