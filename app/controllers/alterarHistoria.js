module.exports.form_historia_atualizar = function(app,req,res){
     res.render('formularios/form_alterar_cadastroHistoria', {validacao:{}, atualizarhistoria:{}});

}

 module.exports.salvar_novos_dados_historia = function(app,req,res){        
        var atualizarhistoria = {
          "NovoTitulo": req.body.NovoTitulo,
          "nova_class_ind": req.body.nova_class_ind,
          "nova_sinopse": req.body.nova_sinopse,
          "autor": req.body.autor, //-- COMO PEGAR O ID DO USUÁRIO QUE ESTÁ NA
          "nova_capa": new formidable.IncomingForm(),

   				 form.parse(req, function (err, fields, files) {
      				var caminhoantigo = files.filetoupload.path;
      				var novocaminho = 'C:/Users/NB-BOU-10/Desktop/projetoHQ/app/imagens' + files.filetoupload.name;
      				fs.rename(caminhoantigo, novocaminho, function (err) {
        				if (err) throw err;
        					res.write('Capa anexada e movida para o caminho app/imagens');
        					res.end();
      					});
 					});

        }

        req.assert('NovoTitulo','O titulo é obrigatório').notEmpty();
        req.assert('nova_class_ind','A classificação indicativa é obrigatória').notEmpty();
        req.assert('nova_sinopse','A sinopse obrigatório').notEmpty();
          
           var erros = req.validationErrors();

            if(erros) {
                res.render("formulario/form_alterar_cadastroHistoria", {validacao:erros, atualizarhistoria: atualizarhistoria});
            return;
            
            }
        
        var connection = app.config.dbConnection();
        var alterarHistoriaModel = new app.app.models.alterarHistoriaModel(connection);
//terminar
        alterarHistoriaModel.salvarHistoria(atualizarhistoria, function(error, result){
            res.redirect('/atualizarDados');
           
           });

 }
