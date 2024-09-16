// Gerencia posts do blog.

// Importa a conexão com o banco de dados do módulo de configuração
const connection = require('../config/db');

// Importa e carrega as variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

// Função assíncrona para armazenar um novo blog no banco de dados
async function storeBlog(request, response) {
    const params = Array(
        request.body.titulo,    // Título do blog, obtido do corpo da requisição
        request.body.autor,     // Autor do blog, obtido do corpo da requisição
        request.body.conteudo   // Conteúdo do blog, obtido do corpo da requisição
    );
    
    const query = "INSERT INTO blog(titulo, autor, conteudo) VALUES(?, ?, ?)";
    
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
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
    const query = "SELECT * FROM blog";
    
    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            });
        }
    });
}

// Função assíncrona para deletar um blog pelo ID
async function deleteBlog(request, response) {
    const blogId = request.params.id; // Obtém o ID do blog a partir dos parâmetros da requisição
    const query = "DELETE FROM blog WHERE id = ?"; // Query para deletar o blog

    connection.query(query, [blogId], (err, results) => {
        if (results.affectedRows > 0) {
            response.status(200).json({
                success: true,
                message: "Blog deletado com sucesso!"
            });
        } else {
            response.status(404).json({
                success: false,
                message: "Blog não encontrado!"
            });
        }
    });
}

// Função assíncrona para atualizar um blog pelo ID
async function updateBlog(request, response) {
    const blogId = request.params.id; // Obtém o ID do blog a partir dos parâmetros da requisição
    const { titulo, autor, conteudo } = request.body; // Obtém os novos dados do corpo da requisição

    // Define a query para atualizar o blog no banco de dados
    const query = "UPDATE blog SET titulo = ?, autor = ?, conteudo = ? WHERE id = ?";

    // Executa a query no banco de dados com os novos valores e o ID do blog
    connection.query(query, [titulo, autor, conteudo, blogId], (err, results) => {
        if (err) {
            // Em caso de erro, retorna a resposta com status 400 e a mensagem de erro
            response.status(400).json({
                success: false,
                message: "Erro ao atualizar o blog!",
                sql: err
            });
        } else if (results.affectedRows > 0) {
            // Se a operação for bem-sucedida, retorna uma resposta de sucesso
            response.status(200).json({
                success: true,
                message: "Blog atualizado com sucesso!"
            });
        } else {
            // Caso o blog não seja encontrado, retorna uma mensagem de erro
            response.status(404).json({
                success: false,
                message: "Blog não encontrado!"
            });
        }
    });
}

// Exporta as funções para que possam ser usadas em outros arquivos do projeto
module.exports = {
    storeBlog,
    getBlog,
    deleteBlog,  // Exporta a função deleteBlog
    updateBlog   // Exporta a função updateBlog
};
