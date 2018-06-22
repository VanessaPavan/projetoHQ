/*módulo que exporta as selects necessárias no cadastro de usuário*/

function CadastroUsuarioDAO (connection) {
	this._connection = connection;


}

CadastroUsuarioDAO.prototype.getUsuarios = function(callback){
        this._connection.query('SELECT * FROM usuario', callback);
}

CadastroUsuarioDAO.prototype.salvarUsuario = function(cadastro,callback){
		this._connection.query('INSERT INTO usuario SET ?', cadastro, callback);	

}


module.exports = function () {
	return CadastroUsuarioDAO;
}
  