module.exports = function(app){

    app.get('/cadastrosHistoria', function(req,res){

        var connection = app.config.dbConnection();
        var cadastroHistoriaModel = new app.app.models.CadastroHistoriaDAO(connection);

        cadastroHistoriaModel.getHistoria(function(error, result){
          res.redirect('cadastros/historia');
        });

    });
}