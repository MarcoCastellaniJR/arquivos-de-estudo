const meuModulo = require('./meu_modulo');
// LA - Caso não seja colocado o ./ indicando que o módulo esta nessa pasta
// ele vai procurar esse nome como um CoreModule do Node, e não vai encontrarr
// Não precisa colocar a extensão .js, mas se colocar não gera nenhum tipo de erro
const soma = meuModulo.soma
// LA- está sendo encapsulado a funcão de soma para nao precisar sempre 
// escrever meuModulo.soma
soma(4,5)
