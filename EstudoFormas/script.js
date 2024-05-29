
const div = document.querySelector("#box1")
const name = (e) => {
        const templates = ` <div class="circle">
        <a href="#">${e}</a>
                            </div>`
        const parse = new DOMParser()
        const htmlT = parse.parseFromString(templates,"text/html");
        const ins = htmlT.querySelector(".circle")
        div.appendChild(ins)
}
name("9")
for(i=0;i<=5;i++){
    name(i)
}