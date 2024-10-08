// Inicia o servidor.
const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            description: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3003" }],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};

const taskRouter = require('./routes/blogRouter.js');
const swaggerDocs = swaggerJsDoc(swaggerOptions);


// Importar o arquivo app
const app = require('./app');
// Importar a porta do servidor
const port = app.get('port');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Testar API
app.listen(port, () => console.log(`Run on port ${port}!`));