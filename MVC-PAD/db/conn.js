const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_mvc','root','password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

try{
    sequelize.authenticate()
    console.log(`Conectamos ao MySQL, Schema: node_mvc`);
}catch(error){
    console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize