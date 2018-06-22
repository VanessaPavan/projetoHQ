//Módulo das configurações necessárias no servidor

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');
var passport = require('passport');
var expressValidator = require('express-validator');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var formidable = require('formidable');
var passport = require("passport");
var passportJWT = require("passport-jwt");


//Realiza a chamada da função express e seu retorno
var app = express();
//O EJS será o responsável por criar as views necessárias
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());


consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;