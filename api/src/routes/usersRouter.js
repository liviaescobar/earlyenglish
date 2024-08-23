// Importa o módulo Router do pacote Express para criar um novo roteador
const { Router } = require('express');

// Cria uma instância do roteador
const router = Router();

// Importa a função de controle 'storeUser' do módulo 'usersController'
const { storeUser } = require('../controller/usersController');

// Define a rota POST para '/user/create'. Quando um pedido POST é feito para essa rota, a função 'storeUser' é chamada
router.post('/user/create', storeUser);

// Exporta o roteador para que possa ser usado em outros arquivos do projeto
module.exports = router;
