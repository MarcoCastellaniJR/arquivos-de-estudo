import chalk from "chalk";
// const chalk = require('chalk');
const nota = 5;
if(nota>5){
    console.log(chalk.green.bold(`Parabéns você foi aprovado com a nota ${nota}`))
}else{
    console.log(chalk.red.bold(`Você foi reprovado com a nota ${nota}`))
}
