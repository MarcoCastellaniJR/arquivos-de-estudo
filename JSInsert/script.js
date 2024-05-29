const nome = "Marco"
const age = 28
const div = document.querySelector("#body")
const template = `<div class="name-user">
                    <h1> Olá ${nome}, de ${age} anos de idade </h1>
</div>`

const parse = new DOMParser()
const htmlTemplate = parse.parseFromString(template,"text/html")
const insert = htmlTemplate.querySelector(".name-user")



div.appendChild(insert)


function numbers(){
    const qtd = 2;
    for(i=0;i<=qtd;i++){
        const templates = `<div class="sum">
        <p>${i}:number</p>
        </div>`
        const htmlT = parse.parseFromString(templates,"text/html");
        const ins = htmlT.querySelector(".sum")
        div.appendChild(ins)
    }
}
numbers()

const name = (e) => {
    for(i=0;i<=e;i++){
        const templates = `<div class="sum">
        <h1>Esse é o Título</h1>
            <div>
                <a href="https://www.google.com.br">Link</a>
                <p>Esse link te leva para o Google</p>
            </div>
        <p>${i}:number</p>
        </div>`
        const htmlT = parse.parseFromString(templates,"text/html");
        const ins = htmlT.querySelector(".sum")
        div.appendChild(ins)
    }
}
name(1)



