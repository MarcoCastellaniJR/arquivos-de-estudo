// arrays
const lista = [1,2,3,4,5];

console.log(lista);

const itens = ['Marco',15,90.5,'Alá']
const subitens = [['Marco', 'Castellani'],['Beatriz', 'Nardini']];
console.log(itens)
console.log(subitens)
console.log(subitens[0])
console.log(subitens[0])
console.log(itens[0])


//  Métodos
// Métodos são como funções, acessamos com notação de ponto e utilizamos () para invocar
// Um importante conceito de OOP: Objetos são compostos por métodos e propriedades;
// Como muitos dados são objetos em JS, Temos métodos e propriedades neles;

const numbers = [ 5,3,4];
const otherNumbers = [1,2,3];
const allNumber = numbers.concat(otherNumbers);
console.log(allNumber);

const txt = "Algum Texto";
console.log(txt.toLocaleUpperCase());
console.log(txt.indexOf("T"));


//       Objects Literal
// Em JS temos um tipo de dado que ´o objeto, mas seu nome técnico é Object  Literals
// Isso poque o objeto vem da orientação a Objetos
// Já o literais possui apenas propriedades e métodos, nps mesmos os criamos
// O Objeto fica em um bloco de {}

const person = {
    name: "Marco",
    lastName: "Castellani",
    age: 28,
    job: "Developer"
}
console.log(person)
console.log(person.name)
console.log(person.lastName)
console.log(person.age)
console.log(person.job)
// Adicionando e removendo propriedades de um Object

const car ={
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}
console.log(car);
car.doors = 4;
console.log(car);
delete car.km;
console.log(car);

// Diferença entre Arrays e Objetos em JavaScript
// -- Os arrays são utilizados como listas de itens, geralmente todos possuem o mesmo tipo;
// -- Já os onjetos são utilizador para descrever um item, contém as informações do mesmo, e as
// propriedades possuem diferentes tipos de dados;;
// -- Podemos ter tambem um Array de Objetos, isso é muito utilizado;

// -- Mais sobre objetos
// -- Podemos copiar todas as propriedades de um objeto para outro com método assign
// -- O object literal é uma intância de um objeto, chamado object
// -- Um objeto ou array criado com const pode ter seus elementos e propriedades modificados!!!!!!!!!

const obj = {
    a: "teste",
    b: true,
}
console.log(obj instanceof Object)

const obj2 = {
    c: [],
}
Object.assign(obj2, obj)

console.log(obj2)
console.log(obj)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car))

// Mutação
// - Outra caracteristica interessante é a mutação
// isso ocorre quando criamos um objeto a partir do outro
// - Esse novo objeto não é um novo e sum uma referência do primeiro
// -- As mudanças dele, podem afetar a cópia e vice-versa

const a = {
    name: "Marco"
}

const b = a;

console.log(a);
console.log(b);
console.log(a===b);

a.age = 28;
console.log(a);
console.log(b);

console.clear();


// LOOPS em ARRAYS ´´
// -- Algo muito comum é percorrer os arrays através de estruturas de repetição, como for e while
// isso serve para utilizar o resultado de cada um dos elementos de forma simples, sem repetição de código

// Metodo push e pop
// os metodos de array são uteis para manipular os arrays
// push == adicionamos um item ao fim do array
// pop  = removemos um elemento no fim do array

const arrayNovo = ["a","b","c"];
console.log(arrayNovo);
arrayNovo.push("d");
console.log(arrayNovo);
const removido  = arrayNovo.pop();
console.log(removido)
console.log(arrayNovo)
arrayNovo.push("z","x")
console.log(arrayNovo)

console.log("Final do pop e Push")

// Métodos SIFHT e UNSHIFT
// -- São o contrátio do metodo pop e push
// SIFHT - REMOVE O PRIMEIRO ELEMENTO DO ARRAY
// UNSHIFT - ADICIONA ITEM AO INÍCIO DO ARRAY

const arrayNovo1 = ["a","b","c"];
console.log(arrayNovo1);
arrayNovo1.unshift("d");
console.log(arrayNovo1);
const removido1  = arrayNovo1.shift();
console.log(removido1)
console.log(arrayNovo1)
arrayNovo1.unshift("z","x")
console.log(arrayNovo1)

// IndexOf == nos permite encontrar o indice de um elemento que passamos como argumento para o método

// LastIndexOf == é utilizado quando há repetições de elementos e precisamos do indíce da última ocorrência

// Metodo Slice -- é utilizado para extrair um array menor de um array maior
// o intervalo de elementos é determinado pelos parametros, que são, o indice de inicia e o indice de fim.
// o ultimo elemento é ignorado, se quisermos ele devemos somar 1 ao indice final

const testeSlice = ["a","b","c","d","e"]
const subArray = testeSlice.slice(2,4)
console.log(testeSlice)
console.log(subArray)

// Metodos forEach

testeSlice.forEach((n) => console.log(n))

const posts = [
    {title: "Primeiro Post", category:"PHP"},
    {title: "Segundo Post", category:"JavaScript"},
    {title: "Terceiro Post", category:"Java"},
    {title: "Quarto Post", category:"Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo o ${post.title}, da categoria ${post.category}`)
})

// includes = verifica se tem o elemento que buscamos no array
// Reverse -- Inverte o array original de trás para frente

console.log(posts.reverse())


// String em Java script
// - As Strings também são objetos, ou seja, tem metodos e propriedades
// - Alguns são muito semelhantes aos de array
// - note qie você pode utilizar o lenght em uma string ou em um array
// - e também acessar cada caractere pelo seu indice


// Método TRIM
// o Trim remove tudo que não é texto em uma string
// como caracteres especiaise espaços em branco
// - Um método interessante para utilizar em sanitização de dados, o metodo não modifica o texto original;
const trimTeste = "        Testando \n"
console.log(trimTeste)
console.log(trimTeste.trim())

// padStart
// insere um texto no começo da string
// o texto pode ser repetido, de acordo com o segundo argumento ao método, ele determina o máximo de caracteres do texto alvo

const testPadStart = "1"
const newNumber = testPadStart.padStart(4,"0")
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10,"0")
console.log(testePadEnd)

// Método de SPLIT
// o split divide uma string em um array
// cada elemento será determinado por um separador em comum
// os mais utilizados são ponto e virgula, virgula, espaço
const separador = "Olá vamos fazer um teste"
const outroSeparador = "O;Rato;roeu;a;roupa;do;rei;de;roma"
const arrayDaFrase1 = separador.split(" ")
const arrayDaFrase2 = outroSeparador.split(";")
console.log(arrayDaFrase1)
console.log(arrayDaFrase2)

const fraseMontada1 = arrayDaFrase1.join(" ")
const fraseMontada2 = arrayDaFrase2.join(";")

console.log(fraseMontada1)
console.log(fraseMontada2)


// Metódo REPEAT
// repete o texto o num de vezes que é passado

console.log(fraseMontada1.repeat(5))


// REST OPERATOR
// -- Rest operator é caracterizado pelo simbolo ...
// podemos utilizá-lo para receber indefinidos argumentos em uma função
// assim não precisamos declarar exatamente o que vamos receber, deixando a função mais ampla

const somaInfinita = (...args) => {
    let total = 0;
    for( let i= 0; i < args.length; i++ ){
        total += args[i]
    }
    return total;
}

console.log(somaInfinita(10,23,523,323,43,53,12,32123))

// for...of
// o for of é uma estrutura de repetiçao semelhante ao for, porém mais simples
// o numero de repetição é baseado no array utilizado
// E Podemos nos referir aos elementos sem precisar acessar o indice deles;

const somaInfinita2 = (...args) => {
    let total = 0;
    for(num of args){
        total += num;
        console.log(num)
    }
    return total;
}

console.log(somaInfinita2(10,23,523,323,43,53,12,32123))


console.clear()

// Destructuring em Objetos
// destructuring é uma funcionalidade que nos permite desestruturar algum dado
// no caso dos objetos, é possivel criar variávels a partir das suas propriedades com uma simples sintaxe

const userDetails = {
    firstName: "Marco",
    lastName: "Castellani",
    job:"Developer"
}

const{firstName, lastName, job} = userDetails;

console.log(firstName, lastName,job)

// renomear as propriedades
const{ firstName: primeiroNome } = userDetails;

console.log(firstName)
console.log(primeiroNome)

// Destructuring em Arrays
// - O Destructuring também pode ser utilizado para desestruturar um array em variável
// A sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nome das chaves

const myList = ["Avião", "Submarino", "Carro"]
const [veiA,veiB,veiC] = myList
console.log(veiA)

// ---------- JSON
// O Json, JavaScript Object Notation é um dado em formato de Texto
// Utilizamos para comunicar entre API e front end
// Sua formatação é rigorosa, se for mal feita o dado é invalidade e não conseguimos comuniucação
// seu formato lembra os Object Literals
// Regras - Apenas aspas Duplas e não aceita comentários

const myJson = '{"name":"Marco", "age":31}'
console.log(myJson)

const myObject = JSON.parse(myJson)

console.log(myObject)
myObject.isOpenToWork = true;
console.log(myObject)
const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)