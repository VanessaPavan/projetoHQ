/*módulo que exporta as selects necessárias no cadastro de usuário*/

function CadastroHistoriaAtualizar (connection) {
	this._connection = connection;

}

CadastroHistoriaAtualizar.getHistoriaTitulo = function(callback){
        this._connection.query('SELECT titulo FROM historia', callback);
}

CadastroHistoriaAtualizar.getHistoriaClassInd = function(callback){
        this._connection.query('SELECT class_ind FROM historia', callback);
}

CadastroHistoriaAtualizar.getHistoriaSinopse = function(callback){
        this._connection.query('SELECT sinopse FROM historia', callback);
}

CadastroHistoriaAtualizar.getHistoriaCapa= function(callback){
        this._connection.query('SELECT capa FROM historia', callback);
}


CadastroHistoriaAtualizar.atualizarHistoriaTitulo = function(NovoTitulo,callback){
		this._connection.query('UPDATE historia SET titulo = NovoTitulo', NovoTitulo, callback);	
		/*aqui deve ter um where para pegar o id do usuario ? */		
}

CadastroHistoriaAtualizar.atualizarHistoriaClassInd = function(nova_class_ind,callback){
		this._connection.query('UPDATE historia SET class_ind = nova_class_ind', nova_class_ind, callback);	
		/*aqui deve ter um where para pegar o id do usuario ? */		
}

CadastroHistoriaAtualizar.atualizarHistoriaSinopse = function(nova_sinopse,callback){
		this._connection.query('UPDATE historia SET sinopse = nova_sinopse', nova_sinopse, callback);	
		/*aqui deve ter um where para pegar o id do usuario ? */		
}

CadastroHistoriaAtualizar.atualizarHistoriaCapa = function(nova_capa,callback){
		this._connection.query('UPDATE historia SET nova_capa = nova_capa', nova_capa, callback);	
		/*aqui deve ter um where para pegar o id do usuario ? */		
}


module.exports = function () {
	return CadastroHistoriaAtualizar;
}
  
