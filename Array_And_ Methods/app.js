//importando o express 
var express = require('express');

//Criando a var app para chamar os métodos do express
var app = express();

//setando a view engine => EJS
app.set('view engine', 'ejs');

//Config path do arquivos estáticos
app.use(express.static('./public'));


app.get('/array', function(req,res){
    res.render('array/array.ejs');
});

app.get('/admin', function(req,res){
    res.render('admin/form_add_noticia');
});

app.get('/methods', function(req,res){
    res.render('methods/methods.ejs');
});

app.listen(9001, function(){
    console.log("Servidor rodando com Express");
});
