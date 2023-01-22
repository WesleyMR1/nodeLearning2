const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodejs', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("conectado com sucesso");
}).catch(function (error) {
    console.log("Falha ao se conectar: "+error);
});

const Postagem = sequelize.define('postagens', {
    titulo : {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
// Postagem.sync({force: true});

// Postagem.create({
//     titulo: "Titulo qualquer",
//     conteudo: "Um conteudo qualquer"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});
// Usuario.sync({force: true});

// Usuario.create({
//     nome: "Wesley",
//     sobrenome: "Rocha",
//     idade: 18,
//     email: "Wesley@Wesley.com"
// });