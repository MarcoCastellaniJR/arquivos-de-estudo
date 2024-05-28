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
