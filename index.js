const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');



//config
    //template engine
        //nova versão precisa usar 'handlebars.engine'
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    
    

    //rotas
        //.(requisição)
        app.get('/', function(req,res){
            Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
                res.render('home', {posts: posts});
            })
        });
        app.get('/cadastro', function(req,res) {
            res.render('formulario');
        });
        app.post('/add', function(req,res) {

            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/');
            }).catch(function(error){
                res.send(`Houve um erro: ${error}`)
            });

        })


app.listen(8081, () => {console.log("Servidor rodando!");});