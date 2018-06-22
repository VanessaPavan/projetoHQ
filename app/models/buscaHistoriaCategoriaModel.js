/*módulo que exporta as selects necessárias na busca de história*/
module.exports = function(){

    this.buscarHistoriaCategoria = function(connection, callback){
        connection.query('SELECT id_historia, titulo FROM historia as H INNER JOIN historia_categoria as hc on h.id=hc.id_historia', callback);
       
    }

    return this;

} 


