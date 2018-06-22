function paginaInicialModel (connection) {
	this._connection = connection;
}
//Histórias em destaque

paginaInicialModel.prototype.getHistoriasDestaque = function(callback) {
		this._connection.query('select * from historia where destaque=1;', callback);
} 

//Categorias

paginaInicialModel.prototype.getCategoriasHistoria = function(callback) {
		this._connection.query('select * from categoria;', callback);

}


module.exports = function () {

	return paginaInicialModel;
}




