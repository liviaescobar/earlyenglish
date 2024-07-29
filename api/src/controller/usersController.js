const connection = require('../config/db');

async function storeUser(request, response) {
    console.log(request.body)
    
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.sexo,
        request.body.senha
    );

    const query = "INSERT INTO users(name, email, sexo, password) VALUES (?,?,?,?)";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
            .status(200)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso!",
                data: results 
            })
        }
    })
}

module.exports = {
    storeUser
}