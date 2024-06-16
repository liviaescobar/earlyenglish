const express = require('express');

const dotenv = require('dotenv').config();

const router = require('./routes/taskRouter');
const blogRouter = require('./routes/blogRouter');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/api', router);
app.use('/api', blogRouter);
module.exports = app;