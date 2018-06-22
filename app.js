//variável que requer o arquivo server dentro de config
var app = require('./config/server');

app.listen(3000, function(){
//Retorna uma mensagem no servidor informando que a comunicação foi realizada com sucesso
    console.log("Servidor ON");
});


