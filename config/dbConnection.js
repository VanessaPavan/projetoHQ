//Arquivo de conexão com o banco de dados

var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123@mudar',
        database: 'projeto_hq'
    });
}

module.exports = function(){
    console.log('Conexão funcionando com sucesso');
    return connMySQL;
}