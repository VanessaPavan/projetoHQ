module.exports = function(app){
 

    app.get('/login/autenticar', function(req,res){

    	var appData = {};
    	var connection = app.config.dbConnection();
    	var Confirmaemail = req.body.email;
        var Confirmasenha = req.body.senha;
      	var UsuarioLogin = new app.app.models.loginUsuarioModel(connection);

    	UsuarioLogin.getUsuarioLogin(email,senha, function(error, result){

    		//IF confirmaSenha==senha
    		//confirmalogin = login
		});

	});

}

/*

module.exports = function(app){
 

    app.get('/login/autenticar', function(req,res){

    	var email = req.body.email;
        var senha = req.body.senha;
		var connection = app.config.dbConnection();
        var loginUsuarioModel = app.app.models.loginUsuarioModel;

      cadastroUsuarioModel.getUsuarios(function(error, result){
           res.render('cadastros/loginEfetuado');
        
        });

      });
}
        
*/
