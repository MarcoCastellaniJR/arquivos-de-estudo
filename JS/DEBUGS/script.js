// O que é Bug e Debug
// Bug : um problema que ocorreu no código, muitas vezes por erro do programador, impede o funcionamento de software
//debug - método de encontrar e resolver o bug, em java script temos diversasa estratégias para isso
// validação tecnicas utilizadas para ter o minimo possivel de bugs no software

// Strict Mod
// O Strict é um modo de desenvolvimento que deixar o JS mais rigoroso na hora de programar
// Deve ser declarado no topo do arquivo ou de funções
// o Strict não limita os recursos de js, ele baliza a forma que você programa
// Bibliotecas famosas são feitas em Strict

"use strict";

const opa = "Teste" // 

// console.log() muito utilizado para degubar o código

// metodo debug
// o debugger é uma isntrução que nos permite o debug no console do navegador
// podemos evidenciar os valores das variáveis em tempo real e com o programa executando

let c = 1
let d = 2

if(c==1){
    c = d+2
}

//debugger;
for(let i = 0;i<d;i++){
    c=c++
}
// o codigo vai parando em cada debugger

// Tratamento de dados por função
// Nunca podemos confiar no dado que é passado pelo usuário
// sempre devemos criar validações e tratamento para os mesmos
// ao longo do curso aprenderemos diversas técnicas

function checkNumber(n){
    const result = Number(n)
    if(Number.isNaN(result)){
        console.log("Vlaor incorreto!!")
    }
    console.log("Valor correto")
    return result
}

checkNumber("15");
checkNumber("Teste");
checkNumber(1)

// Exceptions
// As Exceptions são erros que nós geramos no programa
// Este recurso faz o programa ser abortado , ou seja, ele não continua sua execução
// utilizamos a expressão throw new Error , com a mensagem de erro como argumento

let x = 10
//if(x != 11){
//    throw new Error ("O valor de X não pode ser diferente de 11")
//}

// Try Catch
// TryCatch é um recurso famoso nas linguagens de programação
// onde tentamos executar algo em try, e se um erro ocorrer ele cai no bloco do catch
// util tanto para debug, como também no desenvolvimento de uma aplicação sólida

try{
    const soma = x + y
} catch (error){
    console.log( `Erro no programa ${error}`)
}


// Finally
// O finally é uma instrução que vai depois do bloco try catch
// ela é executada independente de haver algum erro ou não no trycatch

try {
    const value = checkNumber("1")
    if(!value){
        throw new Error("Valores inválidos")
    }
} catch(error){
    console.log(`Opa, aconteceu um problema ${error}`)
} finally {
    console.log("O código foi executado")
}


// Assertions
// assertions são quando os tratamentos de valores passados pelo usuário , geram um erro
// porém este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja, 
// seria algo para os devs e não para os usuários

function checkArray(arr){
    if(arr.length <= 0){
        throw new Error(" O array precisa ter elementos")
    }else {
        console.log(`o array tem ${arr.length} elementos`)
    }
}

checkArray([1,2])