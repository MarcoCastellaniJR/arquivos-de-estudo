// O que são Eventos
// ações atreladas a algum comportamento do usuário
// por exemplo: click, alguma tecla, movimento da tela e mouse
// podemos inserir lógica quando estes eventos ocorrem
// e podemos disparar eventos em certos elementos
// está tecnica é conhecida como event handler


// Como acionar um evento
// Primeiramente precisamos selecionar o elemento que vai disparar o evento
// Depois vamos ativar um método chamado addEventListever;
// Nele declaramos qual o tipo do evento, e por meio de callback definimos o que acontece

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("Clicou seu puto")
})

// removendo Eventos
// Há situações que vamos querer remover os eventos dos elementos;
// O método para isso é removeEventListener
// Passamos o evento que queremos remover como argumentos

const secontBtn = document.querySelector("#btn")
const thirdBtn = document.querySelector("#other-btn")

function imprimeMensagem() {
    console.log("Evento Base")
}

secontBtn.addEventListener("click",imprimeMensagem)

thirdBtn.addEventListener("click", () => {
    console.log("Evento Removido")
    secontBtn.removeEventListener("click", imprimeMensagem)
})

// O Objeto do evento
// todo evento possui um argumento especial que contém informações do mesmo
// geralmente chamado de event ou e

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event)=>{
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
    console.log(event)
})

// Propagação
// Quando um elemento de um evento não é claramente definido, pode haver propagação
// Ou seja, um outro elemento ativar o evento
// para resolveer esse problema temos o metodo stopPropagation

const containerBtn = document.querySelector("#btn-container")
const btncontainerBtn = document.querySelector("#div-btn")

containerBtn.addEventListener("click", ()=>{
    console.log("Evento-1")
})

btncontainerBtn.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
    console.log("Event-2")
})

// Ações Default
// Muitos elementos tem ações padrão do HTMLA
// Como os links que nos levam a outras páginas
// podemos remover isso com o método preventDefault

const meuSite = document.querySelector("a")
meuSite.addEventListener("click", (e) => {
    e.preventDefault()
})

// Eventos de tecla
// Os eventos da tecla mapeiam as ações do teclado
// Temos a disposição Keyup e Keydown
// keyup ativa quando a tecla é solta
// E keyDown quando é pressionada 

document.addEventListener("keyup", (e) =>
    console.log(`Soltou a tecla ${e.key}`)
)

// Outros eventos do mouse
// mousedown - quando pressiona o botãop do mouse
// mouseup - solto o botão do mopuse
// dblclick - click duplo
const mouse = document.querySelector("#mouse")

mouse.addEventListener("dblclick", (e)=>{
    console.log("Pessionou o Botão")
})


// Movimento do mouse
// É possível ativar um evento a partir da movimentção do mouse
// O evento é o mouse Move
// Com o objeto de evento podemos detectar a posição do ponteiro do mouse

document.addEventListener("mousemove", (e) =>{
    //console.log(`No Eixo X: ${e.x}`)
    //console.log(`No Eixo Y: ${e.y}`)
})

// Eventos por Scroll
// Podemos também adicionar um evento ao Scroll do mouse/pagina
// Isso é feito pelo evento scroll
// Podemos determinar que algo aconteça após chegar numa posição escolhida da tela

window.addEventListener("scroll", (e) =>{
    if(window.pageYOffset > 500){
        console.log("Passamos de 500Px")
    }
})

// Evento de Focus
// E evento Focus é disparado quando focamos em um elemento
// Já o blur é quando perde o foco do elemento
// Estes são comuns em inputs

const focus = document.querySelector("#my-input")
focus.addEventListener("focus", (e) =>{
    console.log("Focus")
    
})
focus.addEventListener("blur", (e) =>{
    console.log("Blur")
    
})

// Eventos de carregamento de página
// Podemos adicionar um evento ao carregar a página, que é o load
// é quando o usu´rio sai da página, que é o beforeunload

window.addEventListener("load", (e) =>{
    console.log("A página carregou")
})
//window.addEventListener("beforeunload", (e) =>{
//    e.preventDefault()
//    e.returnValue ="Teste"
//})

// Tecnica do Debounce
// O debounce é uma tecnica utilizada para fazer um evento disparar menos vezes
// isso poupa memória do usuário, pois talvez nem sempre o evento seja necessário

const debounce = (f,delay) => {
    let timeout
    return(...arguments) =>{
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            f.apply(arguments)
        },delay)
    }
}

window.addEventListener("mousemove", debounce(()=>{
    console.log("Executando a cada 400ms")
},400))