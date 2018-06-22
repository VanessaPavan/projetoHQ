module.exports.form_contato = function(app,req,res){
     res.render('formularios/form_contato');

}


module.exports.enviar_email = function(app,req,res){

  var mailOpts; 
  var smtpTrans;
  var nodemailer = require('nodemailer');
  var formularioCadastro = {
    "nomeContato": req.body.nomeContato,
    "emailContato": req.body.emailContato,
     "mensagem": req.body.mensagem,
        
  }
       
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'vanessa.epavan707@gmail.com',
      pass: 'Topazwinx1'
    }

});

  mailOpts = {
    from: '${req.body.nomeContato}',
    to: 'vanessa.epavan707@gmail.com',
    subject: 'Nova mensagem Projeto HQ',
    text: 'Olá teste'
  };

  smtpTrans.sendMail(mailOpts, function (err, res) {
    if (err) {
      res.render("formularios/form_contato");
    }
    else {
      res.render('home/index');
 
    }

  });

}