const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeBlog(request, response){

    const params = Array(
        request.body.titulo, 
        request.body.autor,
        request.body.conteudo
    );
    // console.log(params);
    const query = "INSERT INTO blog(titulo, autor, conteudo) VALUES(?, ?, ?)";
    
    connection.query(query, params, (err, results) => {

        if(results){
            response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            })
        }
    })
}

async function getBlog(request, response){
    const query = "SELECT * FROM blog";

    connection.query(query, (err,results) => {
        if(results){
            response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            })
        }
    })
}




module.exports = {
    storeBlog,
    getBlog
}