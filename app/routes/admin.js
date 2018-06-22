//CADASTRO DE USUÁRIO
module.exports = function(app){

app.get('/formulario_cadastro_usuario', function(req, res){
    app.app.controllers.cadastroUsuario.form_cadastro_usuario(app, req, res);

    });

//SALVAR CADASTRO USUÁRIO

app.post('/cadastro/salvar', function(req, res){
    app.app.controllers.cadastroUsuario.form_cadastroUsuario_atualizar(app, req, res);
  });


//ATUALIZAR E-MAIL OU SENHA
app.get('/formulario_atualizar_cadastro', function(req, res){
    app.app.controllers.cadastroUsuario.form_cadastroUsuario_atualizar(app, req, res);

    });

//SALVAR NOVO E-MAIL OU SENHA

app.post('/cadastro/atualizar', function(req, res){
    app.app.controllers.cadastroUsuario.salvar_cadastroAtualizado(app, req, res);
  });



//CADASTRO DE HISTÓRIA

      app.get('/formulario_cadastro_historia', function(req, res){
         app.app.controllers.cadastroHistoria.form_cadastro_historia(app, req, res);

    });


//SALVAR HISTÓRIA

       app.post('/historia/salvar', function(req,res){
         app.app.controllers.cadastroHistoria.historia_salvar(app, req, res); 
       });
/*

//LOGIN USUÁRIO

  app.get('/formulario_usuario_login', function(req,res){
      res.render('formularios/form_usuario_login');

        });


  /*

  app.post('/login/autenticar', function(req,res){
      connection = app.config.dbConnection();
      var loginUsuarioModel = new app.app.models.loginUsuarioModel(connection);
      loginUsuarioModel.getUsuarioLogin(cadastro, function(error, result){
      res.redirect('/cadastros');
      
}

*/

      app.get('/contato', function(req, res){
         app.app.controllers.contato.form_contato(app, req, res);

    });


//FORMULÁRIO CONTATO

       app.post('/enviarFormulario', function(req,res){
         app.app.controllers.contato.enviar_email(app, req, res); 
       });


//ATUALIZAR DADOS HISTORIA
app.get('/formulario_atualizar_cadastroHistoria', function(req, res){
    app.app.controllers.alterarHistoria.form_historia_atualizar(app, req, res);

    });

//SALVAR NOVOS DADOS HISTORIA

app.post('/historia/atualizarDados', function(req, res){
    app.app.controllers.alterarHistoria.salvar_novos_dados_historia(app, req, res);
  });

}

