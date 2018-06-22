module.exports.form_cadastro_usuario = function(app,req,res){
     res.render('formularios/form_cadastro_usuario', {validacao:{}, cadastro:{}});

}

 module.exports.cadastro_salvar = function(app,req,res){
          var cadastro = {
          "nome_completo": req.body.nome_completo,
          "pseudonimo": req.body.pseudonimo,
          "cpf": req.body.cpf,
          "data_nasc": req.body.data_nasc,
          "email": req.body.email,
          "senha": req.body.senha,
        }
       
        req.assert('nome_completo','O nome é obrigatório').notEmpty();
        req.assert('pseudonimo','O pseudônimo é obrigatório').notEmpty();
        req.assert('cpf','O CPF é obrigatório').notEmpty();
        req.assert('data_nasc','A data de nascimento é obrigatória').notEmpty();
        req.assert('email','O e-mail é obrigatório').notEmpty();
        req.assert('senha','A senha é obrigatória').notEmpty();
            
        var erros = req.validationErrors();

        if(erros) {
            res.render("formularios/form_cadastro_usuario", {validacao:erros, cadastro: cadastro});
            return;
         }

      var connection = app.config.dbConnection();
      var cadastroUsuarioModel = new app.app.models.CadastroUsuarioDAO(connection);
      cadastroUsuarioModel.salvarUsuario(cadastro, function(error, result){
        //Fazer tratativa caso o cadastro não seja realizado
      res.redirect('/cadastros');
      console.log("Usuário Cadastrado");

      });

}