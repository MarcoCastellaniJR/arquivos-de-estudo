const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize','root','password',{
    host:'localhost',
    dialect:'mysql'
})
try{
    sequelize.authenticate()
    console.log("Conectamos com sucesso com o sequelize");
}catch(err){
    console.log("Não foi possível conectar ao DB.");
    console.log(err);
}

module.exports = sequelize