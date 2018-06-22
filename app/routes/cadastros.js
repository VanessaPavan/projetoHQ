module.exports = function(app){

    app.get('/cadastros', function(req,res){

        var connection = app.config.dbConnection();
        var cadastroUsuarioModel = new app.app.models.CadastroUsuarioDAO(connection);

        cadastroUsuarioModel.getUsuarios(function(error, result){
            res.render('cadastros/cadastros', { usuario : result });
        });

    });
}