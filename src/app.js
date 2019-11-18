'use strict'

const express  = require ('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega as rotas

const index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(3000, ()=>{console.log("rodando na 3000");});


app.use('/', index);

module.exports.app;
