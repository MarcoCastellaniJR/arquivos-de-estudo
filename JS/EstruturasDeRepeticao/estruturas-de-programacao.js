// Variáveis
// Let pode trocar valor e const não pode ser trocada o valor
let nome = 'Marco';
console.log(nome);
nome = 'Marco Castellani';
console.log(nome);
const name = 'Beatriz'
console.log(name)
//name = 'Nardini'

// janelinha para obrigar digitar alguma coisa
//const age = prompt('Digite sua idade');
//console.log(`Você tem ${age} anos`)

// Alert
//alert("teste")

// MATH
console.log(Math.max(10,20,32,42,53,12));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// Console
console.log('Teste!');
console.error('Erro Falso');
console.clear();

// Estrutura de controles IF && ELSE
//const valor = prompt("Digite sua idade6");
const valor = 11;

if(valor >= 18 ){
    console.log('Ta validado')
}else{
    console.log('Não foi Aprovado')
}


let idade = 18;
if(idade >= 0 && idade <= 10){
    console.log('Usuário tem até 10 anos')
}
else if(idade > 10 && idade <= 20){
    console.log('Usuário tem até 20 anos')
}
else if(idade > 20 && idade <= 30){
    console.log('Usuário tem até 30 anos')
}
else if(idade > 30 && idade <= 40){
    console.log('Usuário tem até 40 anos')
}
else if(idade > 40 && idade <= 50){
    console.log('Usuário tem até 50 anos ')
} else{
    console.log('Usuário acima de 50 anos')
}

// Estrutura de repetição

for(i=0;i<10;i++){
    if(i % 2 ===0){
        console.log(`For - Número par (${i})`);
        continue;
    }
    console.log(`For -Número impar (${i})`);
}
let a = 0;
while(a <= 10){
    console.log(`While - Valor de a= ${a}`);
    if(a ==5){break;}
    a = a + 1;
}
let o = 10
do {
    console.log(`Do While - Valor de O: ${o}`);
    o--
} while (o > 0)

    // switch se não colocar o break no case, ele vai ler todos os posteriores do cógido
const job = "Engenheiro";
switch(job){
    case "Advogado" :
        console.log("É advogado")
        break
    case "Engenheiro":
        console.log("É Engenheiro")
        break
    default:
        console.log("Não temos a profissão")
}
