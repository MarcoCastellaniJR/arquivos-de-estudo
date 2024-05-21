
//criando uma função simples
let a = 0;
function imprimirTeste(){
    console.log('Teste')
}
imprimirTeste();
function testeDeFuncao(index){
    console.log(`Funcão(${a})`);
    a = a + index;
}
testeDeFuncao(1);

const funcaoEmVariavel = function () {
    console.log('Função em Variável');
}

funcaoEmVariavel();

function funcaoComTextoParametro(txt){
    console.log(`Texto enviado: ${txt}`);
}

funcaoComTextoParametro('Olá');

// Retornando valores com funções
const a1 = 10;
const a2 = 10;
const a3 = 10;
function soma(n1,n2){
    return n1 + n2;
}
const resultado = soma(a1,a2);
console.log(resultado);


// Escopo das funções
let y = 10;
function testeDeEscopo(){
    let y = 20;
    console.log(y);
}
console.log(y);

// Arrow functions
// sintaxe resumida que tem algumas diferenças das funcções normais

const arrowFunction = () => {
    console.log("Arrow Function")
}
arrowFunction()

const arrowFunctionPar = (n) =>{
    if(n % 2 === 0){ console.log(`Número par ${n}`)}
    else{console.log(`Número Impar ${n}`)}
}
arrowFunctionPar(10)
arrowFunctionPar(12)
arrowFunctionPar(11)


const retorno = () => console.log('Teste')

retorno()

const raizQuadrada = (x) => {
    return x * x;
}
console.log("Longa: "+raizQuadrada(4))

const raizQuadradaArrow = (x) => x*x;
console.log("Curta: "+raizQuadradaArrow(4))

// parametros opcionais nas funções

const parOpicional = (m,n) => {
    if(n === undefined){
        return m * 2 
    }
    else{return m*n}
}
console.log(parOpicional(10,100));

const greeting = (nome) =>{
    if(!nome){
        return console.log('Olá');
        
    }
    console.log(`Olá ${nome}`)
}
greeting('Marco')
greeting()

// Valor default
const customGreet = (nome, greet = "Olá") =>{
    return `${greet} , ${nome}`;
}

console.log(customGreet('Marco'));
console.log(customGreet('Marco','Bom dia'));


// Closure
// Cosure é um conjunto de funções, onde temos um reaproveitamento de escopo interno de uma função
// pois este escopo nãop pode ser acessado fora da função já que é um bloco
// então ha funcções internas que aproveitam o escopo interno

function someFunction(){
    let txt = "Alguma Coisa"

    function display(){
        console.log(txt)
    }
    display()
}
someFunction()

const multiplicaClosure = (n) => {
    return (m) => {
        return m*n;
    };
}
const c1 = multiplicaClosure(5);
const c2 = multiplicaClosure(5);
console.log(multiplicaClosure());
console.log(c1(2));
console.log(c2(10));

// Recursão
// Um recurso que permite a função se auoinvocar continuamente - loop
// Precisa de uma condição para finalizar para não ser um ciclo infinito

const untilTen = (n,m) => {
    if(n<10) {
        console.log("A função parou de executar");
    }else{;
        const x = n - m;
        console.log(x)
        untilTen(x,m)
    }
}

untilTen(50,5)