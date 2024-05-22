// Java Script com navegador

// PRotocolos da Web
// Protocolo é uma forma de comunicação entre computadores através da rede
// o HTTP serve para solicitar arquivos e imagens do servidor ( Hyper Text TRansfer Protocol
// é possivel navegar em sites através do http
// SMTP - protocolo para envio de email
// TCP - protocolo para transferencia de dados

// Urls
// Cada arquivo que é carregano no navegador tem uma URL
// a URL ( uniform Resource Locator) pode ser dividida em três partes
// por exemplo https://horadecodar.com.br/index.html
// https é o protocolo, horadecodar.com.br é o dominio, que referencia um servidor (DNS > IP)
// e index.html o arquivo/pagina que estamos acessando

// conceitos de html
// html ( hyperText Markup language) é uma linguagem de marcação
// onde estruturamos as paginas web , criando elementos
// os elementos são chamados de tags, que podem ser:
// titulos, imagens, formularios,listas
// as tags são caracterizadas por <p> Texto </p>
// Podemos adicionar estilos ao HTML com css

// A estrutura HTML
// Toda página html tem duas partes improtantes, head e body
// no head inserimos as configurações da pagina, e importaçõesde outros arquivos
// ja no body temos os elementos que ficam visiveis para o usuario
// as tags possuem atributos que configuram os elementos

// HTML E JAVASCRIPT
// Podemos adicionar JavaScript ao Html por meio da tag Script, em arquivo externo ou script na pagina
// algumas tags tem atributos que podem executar JS, mas isso não é muito utilizado
// Sempre que houver um link entre um arquivo e outro, uma chamada HTTP é executada
// Java Script pode ser utilizada para manipular elementos do html e alterar estilos

// HTML E O DOM
// o DOm é uma representação fiel do Html da pagina
// ele é utilizado para acessar o html através do JS, acessamos os elementos/tags
// Assim podemos modificá-lo através dos métodos e propriedades dos objetos que alteram o DOM
// DOM vem de Document Object Model
// Através dele também podemos atrelar eventos ao html, como click ou pressionar teclas do mouse

// DOM
// O DOM pode modificar completamente uma página
// é possivel alterar : elementos, atributos, estilização
// Adicionamos e removemos elementos
// o Dom cria uma árvore do Html,os elementos são chamados de nós

// Movendo-se pelo DOM
// Todos os elementos podem ser acessados através do document.body
// a patir deste elemento pai, vamos encontrando os childNodes (nós)
// e podemos acessar suas propriedades, e consequentemente modifica-los


// 1 movendo-se pelo dom
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1]) /// acessa o header
console.log(document.body.childNodes[1].childNodes[1].textContent) /// acessa o header

// Selecionando Elementos
// Temos várias formas de selecionar especificamente um elemento, ou um conjunto delees
// a diferença entre eles é a forma de seleção, que pode ser por: class,id,seletor de css
// alguns exemplos são: getElementByTagName, getElementById, querySelector

// Encontrando elementos por Tag
// Com o método getElementsByTagName selecionamos um conjunto de elementos por uma tag em comum
// O argumento é uma string que leva a tag a ser selecionada

const listItens = document.getElementsByTagName("li")
console.log(listItens)

// Encontrando elementos por ID
// Com o método GetElementByID selecionamos um único elemento, já que o id é unico na pagina
// O argumento é uma string que leva o ID a ser selecionado
 
const title = document.getElementById("title")
console.log(title)

// Selecionando elementos por classe
// Com o método getElementsByClassName 
// selecionamos um conjunto de elementos por uma classe em comum
// o ARgumento é uma string que leva a classe a ser selecionada
// veja como os atributos do html começam a fazer mais sentido em conjunto com JS

const products = document.getElementsByClassName("products")
console.log(products)

// Encontrando elementos por CSS
// com o método querySelectorAll selecionamos um conjunto de elementos por meio de um seletor css
// e com o querySelector apenas um elemento, com base também um seletor de css

const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)
const mainContainer = document.querySelectorAll("#main-container")
console.log(mainContainer)

// Alterando o HTML
// Podemos mudar praticamente toda a página com DOM
// Adicionar, remover e até clonar elementos
// Alguns métodos muito utilizados são: InsertBefore, appendChild, replaceChild;


// Alterando o Html com InsertBefore
// O insertBefore cria um elemento antes de um outro elemento
// É necessário criar um elemento com JS, isso pode ser feito com createElement
// O elemento de referência pode ser selecionado com alguns dos métodos que vimos antes

const p = document.createElement("p")

console.log(p)

const header = title.parentElement // seleciona o pai do title que é o header

header.insertBefore(p,title)

// Alterando o HTML com appendChild
// Com appendChild é possivel adicionar um elemento dentro de outro
// Este elemento adicionado será o útimo elemento do elemento pai

const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// Alterando o HTML com replaceChild
// Já o método replaceChild é utilizado para trocar um elemento
// novamente precisamos do elemento pai
// e também o elemento para ser substituido e o que vai substituir

const h2 = document.createElement("h2")

h2.textContent = ("Meu novo título")

header.replaceChild(h2, title)

// Criando nós de Texto
// Os textos podem ser manipulados com métdos também
// temos o createTextNode que cria um nó de texto
// e este nó pode ser inserido em um elemento

const myText = document.createTextNode("Agora vamos colocar mais um Título")
console.log(myText)
const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3)
//mainContainer.appendChild(h3)


// trabalhando com atributos
// podemos ler e alterar os valores dos atributos
// para ler vamos utilizar o metodo getAttribute
// e para alterar utilizamos setAttribute, este leva o nome do atributo e o valor para alterar

const firstLink = navLinks.querySelector("a") // só pega o primeiro elemento
console.log(firstLink)
firstLink.setAttribute("href","https://castellanidev.com.br")
console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank")

// altura e largura
// é possível também pegar valores com altura e largura de elementos
// vamos utilizar as propriedades offsetWidth e offsetHeight
// Se queremos desconsiderar as bordas, temos clientWidth e clientHeight

const foo = document.querySelector("footer")

console.log(foo.offsetWidth)
console.log(foo.offsetHeight)

console.log(foo.clientHeight)
console.log(foo.clientWidth)

// Posição do elemento
// com o método getClientBoundingRect podemos pegar várias informaçoes do elemento
// como: posição no eixo X,Y,altura,largura e outros

const product1 = products[0]

console.log(product1.getBoundingClientRect())

// Todo elemento possui uma propriedade chamada style
// a partir dela conseguimos alterar as reegras de CSS
//Note que regras separadas por traço viram camelCase
// exemplobackground-color => backgroundColor

h2.style.color="red"
h2.style.backgroundColor = "#333"


//   -- Alterand estilos de HTML Collection
// html collection aparece quando salacionamos vários elementos de uma vez
// Podemos passar por cada um dos elementos com um for of, e estilizar individualmente cada item

for (const li of listItens){
    li.style.backgroundColor = "Gray"
}