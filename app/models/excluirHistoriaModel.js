/*módulo que exporta as selects necessárias no cadastro de usuário*/

function excluirHistoriaModel (connection) {
	this._connection = connection;


}

excluirHistoriaModel.prototype.getHistoria = function(callback){
        this._connection.query('SELECT * FROM historia', callback);
}

excluirHistoriaModel.prototype.deletarCapitulo = function(cadastro,callback){
		this._connection.query('DELETE FROM capitulo where id_historia = HistoriaSelecionada ?', HistoriaSelecionada, callback);	

}

excluirHistoriaModel.prototype.deletarHistoria = function(cadastro,callback){
		this._connection.query('DELETE FROM historia where id = HistoriaSelecionada ?', HistoriaSelecionada, callback);	

}

module.exports = function () {
	return excluirHistoriaModel;
}
  