const inquirer = require('inquirer');
const chalk = require('chalk')

inquirer.prompt(
    [{
        name: 'p1',
        message:'Qual é o seu nome?'
    },{
        name:'p2',
        message:'Qual é a sua idade?',
        validate: function(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number'
        },
        filter: Number
    }]).then((response) => {
        try{
            if(typeof response.p1 === 'string' && Number.isInteger(response.p2)){
                console.log(chalk.bgYellow.black(`Olá ${response.p1} não sabia que você tinha ${response.p2} anos! Parabéns`))
            }
        }catch(er){
    console.log(`Erro de dados inseridos: ${er}`)}    
    }).catch(err => console.log(`Error:${err}`))