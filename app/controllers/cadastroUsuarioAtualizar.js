module.exports.form_cadastroUsuario_atualizar = function(app,req,res){
     res.render('formularios/form_altera_cadastro');

}
   

 module.exports.salvar_cadastroAtualizado = function(app,req,res){

          var atualizarCadastro = {
          "NovoEmail": req.body.NovoEmail,
          "NovaSenha": req.body.NovaSenha,
        }

      var connection = app.config.dbConnection();
      var CadastroUsuarioAtualizar = new app.app.models.CadastroUsuarioAtualizar(connection);
      CadastroUsuarioAtualizar.atualizarEmailUsuario(atualizarCadastro, function(error, result){
      res.redirect('/cadastros');

      });

      CadastroUsuarioAtualizar.atualizarSenhaUsuario(atualizarCadastro, function(error, result){
      res.redirect('/cadastros');
      console.log("Usuário Atualizado");

      });

}