const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv').config();


const blogRouter = require('./routes/blogRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());


app.use('/api', blogRouter);
app.use('/api', usersRouter);
app.use('/api', loginRouter);

module.exports = app;