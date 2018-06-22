/*módulo que exporta as selects necessárias no cadastro de usuário*/

function CadastroUsuarioAtualizar (connection) {
	this._connection = connection;

}

CadastroUsuarioAtualizar.getEmailUsuario = function(callback){
        this._connection.query('SELECT email FROM usuario', callback);
}

CadastroUsuarioAtualizar.getSenhaUsuario = function(callback){
        this._connection.query('SELECT senha FROM usuario', callback);
}

CadastroUsuarioAtualizar.atualizarEmailUsuario = function(NovoEmail,callback){
		this._connection.query('UPDATE usuario SET email = NovoEmail', NovoEmail, callback);	
		/*aqui deve ter um where para pegar o id do usuario ? */		
}

CadastroUsuarioAtualizar.atualizarSenhaUsuario = function(NovaSenha,callback){
		this._connection.query('UPDATE usuario SET senha = NovaSenha', NovaSenha, callback);	
		/*aqui deve ter um where para pegar o id do usuario ? */		
}

module.exports = function () {
	return CadastroUsuarioAtualizar;
}
  
