const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Seja bem-vendo ao meu app!')
})

app.get('/sobre', function(req, res){
    res.send('Esta e a minha pagina "sobre"')
})

app.get('/blog', function(req, res){
    res.send('Esta e a minha pagina "blog"')
})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send('<h1>Ola ' + req.params.nome + '</h1>' + '<h2> Seu cargo e: ' + req.params.cargo + '</h2>')
})

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})//deve ser a última linha do código