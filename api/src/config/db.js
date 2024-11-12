// Configura a conexão com o banco de dados.

// Importar o pacote do mysql
const mysql = require('mysql2');

// Importar o pacote de acesso às variáveis de ambiente e carregar essas variáveis do arquivo .env
const dotenv = require('dotenv').config();

// Estabelece a criação da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // Define o host do banco de dados, recuperado das variáveis de ambiente
    user: process.env.DB_USER, // Define o usuário do banco de dados, recuperado das variáveis de ambiente
    //password: process.env.DB_PASSWORD, // Define a senha do banco de dados, recuperada das variáveis de ambiente
    database: process.env.DB_DATABASE, // Define o nome do banco de dados, recuperado das variáveis de ambiente
});

// Testa se a conexão com o banco de dados está estabelecida
connection.connect(function(err) {
    if (err) {
        // Se houver um erro de conexão, o erro é lançado e interrompe a execução do programa
        throw err;
    } else {
        // Se a conexão for bem-sucedida, uma mensagem de sucesso é exibida no console
        console.log("Mysql Conectado!");
    }
});

// Exporta a conexão para que possa ser utilizada em outros arquivos do projeto
module.exports = connection;
