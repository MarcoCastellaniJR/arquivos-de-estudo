
// Objeto do sequelize que agora a entender a tipagem das variáveis para o banco de dados
const { DataTypes } = require('sequelize')

// O objeto vai ter que ter a conexão com o DataBase
const db = require('../db/conn')


const User = db.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        require: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    },
})


module.exports = User