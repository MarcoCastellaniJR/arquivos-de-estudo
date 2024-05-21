// programação assincrona
// A programação assincrona precisa ser utilizada quando as respostas não são
//obtidas de forma imediata no programa
// chamadas a uma API são assincronas, não sabemos quanto tmepo a resposta pode demorar
// ate agora utilizamos só instruções síncronas
// na programação assincrona as execuções não ocorrem em formato de fila, e sim no seu tempo


// Função SetTimeout
// A função settimeout faz parte da programação assincrona
// pois estabelecemos uma ação para executada após um certo tempo
// ou seja, o codigo continua rodando e depois temos a execução da função

console.log("Ainda não executou")

setTimeout(function() {
    console.log("Requisição assincrona")
},2000)

console.log("Ainda não executou")

// Função Set Interval
// A função setInterval é semelhante a SetTimeout, ela é executada após um tempo
// Porém ela não para de ser executada, temos a sua chama definida prlo tempo de espera na execução
// é como um loop infinito com execução de tempo controlada

console.log("Set Interval")
console.log("01")
//setInterval(function() {
//    console.log("Intervalo Assincrono - 2")
//},3000)
console.log("02")

// Promises
// As promises ( promessas ) são execuções assincronas
// é literalmente uma promessa de um valor que pode chegar em um ponto futuro
// utilizamos o objeto Promise e alguns métodos para nos auxiliar

const promessa = Promise.resolve(5+5)
console.log("Algum codigo")
promessa.then((value) => {
    console.log(`A soma é ${value}`)
    return value
})
.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`))
console.log("outro codigo")

// falhas nas promisses 
// Uma promise pode conter um erro, ou dependendo de como o código é executado podemos receber um erro
// Utilizamos a função catch para isso, podemos pegar o erro e exibir

Promise.resolve(4*"asd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error("Valores inválidos")
    }
})
.catch((err) => console.log(`Erro ocorreu ${err}`))

// Rejeitando promises
// A reijeição, diferente do erro, ocorre quando nós decidimos ejetar uma promise
// podemos fazer isso com o metodo reject

function checkNumber(n){
    return new Promise((resolve,reject) =>{
        if(n>10){
            resolve(`O numero é maior que Dez`)
        }else {
            reject(new Error("Numero muito Baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)
//console.log(a,b)
a.then((v) => console.log(` O resultado é ${v}`)).catch((err)=>
console.log(`Um erro ocorreu${err}`)
)
b.then((v) => console.log(` O resultado é ${v}`)).catch((err)=>
console.log(`Um erro ocorreu${err}`)
)

// resolvendo várias promises
// com o metodo all podemos executar várias promises
// javaScript se encarrega de verificar e retornar os seus valores finais

const p1 = new Promise((resolve,reject) => {
    setTimeout(function() {
        resolve(10)
    },3000)
})

const p2 = Promise.resolve( 10 + 10)

const p3 = new Promise((resolve , reject) => {
    if(30>10){
        resolve(30)
    }else {
        reject("Error")
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))



// async functions
// as async functions são funções que retornam promises
// consequentemente há a possibilidade de receber o resultado delas depois, além da utilização dos métodos promises

async function somarComDelay(a,b) {
    return a+b
}
somarComDelay(2,4).then((value) => {
    console.log(`O valor da soma é ${value}`)
})
console.log("TesteAsync")

// iNSTRUÇÃO AWAIT
// a instrução await serve para aguardar o resultado de uma async function
// tornando mais simples lidar com este tipo de função, desta maneira não precisamos trabalhar diretamente com promises
// async await

function resolveComDelay(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Resolveu a Promise")
        }, 4000)
    })
}


async function chamadaAsync(){
    console.log("Chamando a Promise, e esperando o resultado")
    console.log()
    const result = await resolveComDelay()
    console.log(`O resultado chegou ${result}`)
}
chamadaAsync()

console.clear()

// Generators
// Generators funcionam de forma semelhante as promises
// ações pdoem ser pausadas e continuadas depois
// temos novos operadores como function* e yield

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
