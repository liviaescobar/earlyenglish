// Trata da autenticação de usuários.

// Importa a conexão com o banco de dados do módulo de configuração
const connection = require('../config/db');

// Função assíncrona para realizar o login de um usuário
async function login(request, response) {
    // Cria um array com o email extraído do corpo da requisição
    const email = Array(request.body.email);

    // Define a consulta SQL para selecionar um usuário com o email fornecido
    const query = "SELECT name, email, sexo, password, id, tipo, created_at FROM users WHERE email = ?";

    // Executa a consulta no banco de dados
    connection.query(query, email, (err, results) => {
        // Registra no console qualquer erro ou resultado da consulta para depuração
        console.log(err, results);

        // Verifica se a consulta retornou resultados
        if (results.length > 0) {
            // Obtém a senha fornecida na requisição e a senha armazenada no banco de dados
            const password = request.body.senha;
            const passwordQuery = results[0].password;

            // Compara a senha fornecida com a senha armazenada
            if (password === passwordQuery) {
                // Se a senha estiver correta, envia uma resposta de sucesso com os dados do usuário
                response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results[0]
                });
            } else {
                // Se a senha estiver incorreta, envia uma resposta de erro
                response
                .status(400)
                .json({
                    success: false,
                    message: "Dados incorretos",
                });
            }
        } else {
            // Se nenhum usuário for encontrado com o email fornecido, envia uma resposta de erro
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso!", 
                    data: err
                });
        }
    });
};

// Exporta a função para que possa ser usada em outros arquivos do projeto
module.exports = {
    login
};
