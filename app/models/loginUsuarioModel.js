module.exports = function(){

    
this.getUsuarioLogin = function(email, senha, connection, callback){
	connection.query('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email], [senha], callback);
    }

    return this;

}