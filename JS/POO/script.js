// O qué a orientação a objetos
// um paradigma de programação, uma outra forma de programa
// utilizando objetos como seu principal principio
// a maioria dos softwaress é desenvolvido neste paradigma
// frameworks e bibliotecas de front-end também são desenvolvidas com POO
// Estávamos desenvolvendo no modo procedural 

// Métodos
// Eles são como propriedades, mas comtén uma função
// invocamos os métodos do mesmo modo que funções

const animal = {
    nome: "Bob",

    latir: function(){
        console.log("au au")
    }
}

console.log(animal.nome);
animal.latir()

// Aprofundadno em métodos
// Os métodos são utilizados para interagir também com as propriedades do seu objto;
// Podemos exibir elas ou modificá-las
// Podemos nos referenciar com o própio objeto com a palavvra reservada this

const pessoa = {
    nome: "Marco",

    getNome: function () {
        return this.nome
    },
    setNome: function (nome){
        this.nome = nome;
    }
}
console.log(pessoa.getNome())
pessoa.setNome("Castellani")
console.log(pessoa.getNome())

// Phototypes
// Prototypes é um recurso que faz parte da arquitetura de javascript
// ´euma espécie de herança, onde objetos pais herdam propriedades e métodos aos filhos
// por isso muitos dados são considerados objetos e temos objetos como: String number e outros
// Ou seja, cada dado tem um objeto pai herdou caracteristicas pelo prototype

// O recurso fundamental do prototype que temos que entender é o fallback
// quando uma propriedade não existe em um dado/objeto, ela é procurada no seu ancestral
// ou seja, é por isso que temos acesso a lenght em string, por exemplo

const text = "MarcoCastellani"
const boo = true
console.log(Object.getPrototypeOf(text))
console.log(Object.getPrototypeOf(boo))

// Quando criamos um objeto a partie de outro, este outro será o prototype do objeto criado
// porém também herdará as características do objeto pai, se for um objeto, herda de Object
// Esta é a cadeia do prototype

const MyObject = {
    a:"b"
}

console.log(Object.getPrototypeOf(MyObject))
console.log(Object.getPrototypeOf(MyObject) === Object.prototype)
const mySecondObject = Object.create(MyObject)
console.log(mySecondObject)
console.log(mySecondObject.a)
console.log(Object.getPrototypeOf(mySecondObject) === MyObject)
// quando você cria um objeto baseado em outro é a mesma coisa que o implements no JAva

// Classes Básicas
// Os prototypes são originados de uma classe;
// Que é o molde dos objetos, nela definimos os métodos e propriedades 
// JavaScript já possui suas classes, porém podemos criar as nossas
// isso é essencial apra Orientação a Objetos


const cachorro = {
    raca:null,
    patas:4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao)
console.log(pastorAlemao.patas)


// Classes baseadas em funções construtoras
// utilizando funções como classes, conseguimos inicias propriedades com a criação do objeto
// chamamos de função construtoras
// o construtor tem como objetivo instanciar um objeto, ou seja criar um novo objeto

function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Pastor Belga")
const jack = criarCachorro("jack", "Pastor Belga")
console.log(bob)
console.log(jack)

// classes baseadas em funções
// Este recurso é semelhante ao anterior, mas com uma nova palavra, NEW
// em várias linguaggens o new é utilizado para instanciar novos objetos, em JS também
// e eles podem partir de funções

function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky)

// classes de função com métodos
// Para adicionar métodos antes da criação do objeto podemos acessar o prototype e coloca-los lá
// esta basicamente é a essencia de Java Script
// Porem com a evolução da linguagem, outros recursos foram adicionados
 

// Metodos na função construtora

Cachorro.prototype.uivar = function () {
    console.log("Auuuuu!!")
}
console.log(Cachorro) // nao aparece uivar
console.log(Cachorro.prototype) // aparece uivar

husky.uivar()


// Claesses ES6
// Nas versões mais atuais de JS abandonamos as functions e utilizamos as classes
// aqui temos recursos comuns em outras linguages, como o construtor
// além da instância por new


class CachorroClasse {
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jess","ROTVAILER")
console.log(jeff)
console.log(jeff.raca)
console.log(jeff.nome)

console.log(Object.getPrototypeOf(jeff))


// classes
// nao podemos adicionar propriedades diretamente as classes
// isso precisa ser feito ai iniciá-la ou via prototype
// metodos da classe também podem utilizar this para se referir ao objeto instanciado
// Os métodos não precisam da palavra function

class Caminhao {
    constructor(eixo,cor){
        this.eixo = eixo
        this.cor = cor
    }
    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixo} e é da cor ${this.cor}`)
    }
}
const scania = new Caminhao( 6 , "Vermelho")
console.log(scania)
scania.descreverCaminhao()

Caminhao.motor = 4
//criou uma propriedade de motor na classe,

const c2 = new Caminhao(4 , "Preto")
console.log(c2) // nao tem acesso a motor

Caminhao.prototype.motor = 4.0
const c3 = new Caminhao(6, "Azul")
console.log(c3)// agora tem acesso a motor por conta da inclusão por prototype


// Override das propriedades via prototype
// As instancias dos objetos são criadas baseadas nas classes
// Ou seja, as propriedades têm os valores definidos no construtor ou por métodos
// para alterá-los podemos utilizar o prototype

class Humano {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}
const mateus = new Humano("Mateus", 31)
console.log(mateus)
console.log(Humano.prototype.idade)

Humano.prototype.idade = "Não definida"
// define o valor padrão do prototype mas não altera nada para objetos definidos

console.log(mateus.idade)

console.log(Humano.prototype.idade)

console.clear()


// Symbols em classes
// quando utilizamos o recurso de Symbol com classes,
// é Possivel criar uma propriedade única e imútavel
// isso é útil quando há algum dado que se repetirá em todos os objetos
// criados a partir dessa classe

class Aviao {
    constructor(marca,turbinas){
        this.marca = marca
        this.turbinas = turbinas


    }
}
const asas = Symbol()
const pilotos = Symbol()
Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boing = new Aviao("boing", 4)

console.log(boing)
console.log(boing[asas])
console.log(boing[pilotos])


// Getter and Setters
// são bem famosos na orientação a Objetos
// O get é um metodo utilizado para exibir o valor de alguma propriedade
// e o Set para alterar o valor da propriedade
// Atravé de métodos, temos um bloco de código para transformação de dados;

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    get exibirTitulo(){
        return `Você está lendo ${this.titulo}`
    }
    set adicionarTags(tags){
        const tagsArrays = tags.split(",")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Algum Post", "É um post sobre programação")
console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programacao , javaScript, Js"
// prestar a atenção que para adicionar em Setter é como se fosse uma String 

console.log(myPost)
console.log(myPost.tags)

// Heranças
// Uma classe pode herdar propriedaddes de outra por meio de herança
// Utilizamos a palavra chave Extends, para adicionar a classe que vai trazer as propriedades
// e Super para enviar os valores para a classe pai


class Mamiferos {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamiferos {
    constructor (patas,nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)

// Operador isntanceOf
//assim como o typeof
// verifica se um objeto é pai de outro objeto

console.log(shark instanceof Lobo)
console.log(Lobo instanceof Mamiferos) // false
console.log(new Lobo(4,"Teste") instanceof Mamiferos) // true

