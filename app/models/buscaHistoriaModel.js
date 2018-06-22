/*módulo que exporta as selects necessárias na busca de história*/

module.exports = function(){

    this.buscarHistoria = function(connection, callback){
        connection.query('SELECT * FROM historia ', callback);
        /*como pegar o ID de usuário que está na sessão?*/
    }

    return this;

}