const connection = require('../config/db');

async function login(request, response) {
    const email = Array(request.body.email);

    const query = "SELECT name, email, sexo, password, id,tipo, created_at FROM users WHERE email = ?"

    connection.query(query, email, (err, results) => {
        console.log(err, results)
        if(results.length > 0) {
            const password = request.body.senha;
            const passwordQuery = results[0].password;

            if(password === passwordQuery) {
                response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results[0]
                })
                
        
            } else {
                response
                .status(400)
                .json({
                    success: false,
                    message: "Dados incorretos",
                })
            }
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso!", 
                    data: err
                })
        }
    })
};

module.exports = {
    login
};