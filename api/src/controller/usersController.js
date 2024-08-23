// Importa a conexão com o banco de dados do módulo de configuração
const connection = require('../config/db');

// Função assíncrona para armazenar um novo usuário no banco de dados
async function storeUser(request, response) {
    // Registra no console o corpo da requisição para depuração
    console.log(request.body);
    
    // Cria um array com os valores extraídos do corpo da requisição
    const params = Array(
        request.body.name,   // Nome do usuário
        request.body.email,  // Email do usuário
        request.body.sexo,   // Sexo do usuário
        request.body.senha   // Senha do usuário
    );

    // Define a consulta SQL para inserir um novo usuário na tabela
    const query = "INSERT INTO users(name, email, sexo, password) VALUES (?,?,?,?)";

    // Executa a consulta no banco de dados
    connection.query(query, params, (err, results) => {
        // Verifica se a consulta foi bem-sucedida
        if (results) {
            // Se a consulta for bem-sucedida, envia uma resposta de sucesso com os dados retornados
            response
            .status(200)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            // Se houver um erro, envia uma resposta de erro com detalhes do erro
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso!",
                data: err // Inclui o erro retornado pelo banco de dados
            });
        }
    });
}

// Exporta a função para que possa ser usada em outros arquivos do projeto
module.exports = {
    storeUser
};
