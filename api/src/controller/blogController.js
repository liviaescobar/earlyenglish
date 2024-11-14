// Gerencia posts do blog.

const connection = require('../config/db'); // Conexão com o banco de dados
const dotenv = require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env
const fs = require("fs");  // Importa módulo para manipulação de arquivos
const path = require("path"); // Importa módulo para manipulação de caminhos


// Define o caminho onde os arquivos enviados serão salvos
const uploadPath = path.join(__dirname, '..', 'uploads');

// Verifica se o diretório de uploads existe; caso contrário, cria
if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath);
}

// Função assíncrona para armazenar um post do blog
async function storeBlog(request, response) {
console.log("aqui")
console.log(request)

    // Verifica se arquivos foram enviados na requisição
    if(!request.files){
        return response.status(400).json({
            success: false, 
            message: "Você não enviou o arquivo"
        });
    }

    const arquivo = request.files.arquivo;  // Obtém o arquivo enviado
    const arquivoNome = Date.now() + path.extname(arquivo.name); // Define um nome único para o arquivo

    // Move o arquivo para o diretório de uploads
    arquivo.mv(path.join(uploadPath, arquivoNome), (erro) => {
        if (erro){
            return response.status(400).json({
                success: false, 
                message: "Erro ao mover o arquivo"
            })
        }

        // Parâmetros para inserção no banco de dados
        const params = Array(
            request.body.titulo,    // Título do blog, obtido do corpo da requisição
            request.body.autor,     // Autor do blog, obtido do corpo da requisição
            request.body.conteudo,   // Conteúdo do blog, obtido do corpo da requisição
            arquivoNome              // Nome do arquivo
        );


        const query = "INSERT INTO blog(titulo, autor, conteudo, arquivo) VALUES(?, ?, ?, ?)";

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
