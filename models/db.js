const Sequelize = require('sequelize');

//conexão com banco de dados MYSQL
const sequelize = new Sequelize('nodejs', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
});
// sequelize.authenticate().then(() => {
//     console.log("conectado com sucesso");
// }).catch(function (error) {
//     console.log("Falha ao se conectar: "+error);
// });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}