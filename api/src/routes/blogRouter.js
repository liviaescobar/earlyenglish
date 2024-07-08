const { Router } = require('express');

const router = Router();

const {storeBlog, getBlog} = require('../controller/blogController');

router.post('/store/blog', storeBlog);
router.get('/get/blog', getBlog);

module.exports = router; 