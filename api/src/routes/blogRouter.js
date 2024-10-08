// Rotas relacionadas ao blog.

// Importa o módulo Router do pacote Express para criar um novo roteador
const { Router } = require('express');

// Cria uma instância do roteador
const router = Router();

// Importa as funções de controle para gerenciar as rotas de blogs
const { storeBlog, getBlog, updateBlog, deleteBlog } = require('../controller/blogController');

// Define a rota POST para armazenar um novo blog. Quando um pedido POST é feito para '/store/blog', a função storeBlog é chamada
/**
 * @swagger
 * /store/blog:
 *   post:
 *     summary: Armazena um novo blog
 *     responses: 
 *       200:
 *         description: Post do blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.post('/store/blog', storeBlog);

// Define a rota GET para obter todos os blogs. Quando um pedido GET é feito para '/get/blog', a função getBlog é chamada
/**
 * @swagger
 * /get/blog:
 *   get:
 *     summary: Define a rota GET para obter todos os blogs
 *     responses: 
 *       200:
 *         description: Post do blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/get/blog', getBlog);

// Define a rota PUT para atualizar um blog específico. Quando um pedido PUT é feito para '/update/blog/:id', a função updateBlog é chamada
/**
 * @swagger
 * /update/blog/:id:
 *   put:
 *     summary: Define a rota PUT para atualizar um blog específico
 *     responses: 
 *       200:
 *         description: Post do blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.put('/update/blog/:id', updateBlog);

// Define a rota DELETE para deletar um blog específico. Quando um pedido DELETE é feito para '/delete/blog/:id', a função deleteBlog é chamada
/**
 * @swagger
 * /delete/blog/:id:
 *   delete:
 *     summary: Define a rota DELETE para deletar um blog específico
 *     responses: 
 *       200:
 *         description: Post do blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.delete('/delete/blog/:id', deleteBlog);

// Exporta o roteador para que possa ser usado em outros arquivos do projeto
module.exports = router;
