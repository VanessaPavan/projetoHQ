module.exports.form_cadastro_historia = function(app,req,res){
     res.render('formularios/form_cadastro_historia', {validacao:{}, historia:{}});

}

 module.exports.historia_salvar = function(app,req,res){        
        var historia = {
          "titulo": req.body.titulo,
          "class_ind": req.body.class_ind,
          "sinopse": req.body.sinopse,
          "autor": req.body.autor, //-- COMO PEGAR O ID DO USUÁRIO QUE ESTÁ NA
          "capa": new formidable.IncomingForm(),

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

        req.assert('titulo','O titulo é obrigatório').notEmpty();
        req.assert('class_ind','A classificação indicativa é obrigatória').notEmpty();
        req.assert('sinopse','A sinopse obrigatório').notEmpty();
        req.assert('autor','O nome do autor é obrigatório').notEmpty();
      
           var erros = req.validationErrors();

            if(erros) {
                res.render("formulario/form_cadastro_historia", {validacao:erros, historia: historia});
            return;
            
            }
        
        var connection = app.config.dbConnection();
        var cadastroHistoriaModel = new app.app.models.CadastroHistoriaDAO(connection);

        cadastroHistoriaModel.salvarHistoria(historia, function(error, result){
            res.redirect('/cadastrosHistoria');
           
           });

 }