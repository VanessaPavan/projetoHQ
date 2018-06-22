/*módulo que exporta as selects necessárias no cadastro de usuário*/

function CadastroHistoriaDAO (connection) {
	this._connection = connection;

}

CadastroHistoriaDAO.prototype.getHistoria = function(callback){
        this._connection.query('SELECT * FROM historia', callback);
        /*verificar se é necessário pegar o ID do usuário*/
}

CadastroHistoriaDAO.prototype.salvarHistoria = function(historia,callback){
		this._connection.query('INSERT INTO historia SET ?', historia, callback);	
		/*verificar se é necessário pegar o ID do usuário*/

}

module.exports = function () {
	return CadastroHistoriaDAO;
}
  
