module.exports = function(app){

    app.get('/buscaHistoria', function(req,res){

        var connection = app.config.dbConnection();
        var buscaHistoriaModel = app.app.models.buscaHistoriaModel;

        buscaHistoriaModel.buscarHistoria(connection, function(error, result){
            res.render('cadastros/buscaHistoria', { busca : result });
        });

    });
}