// Seleção de elementos
const mutiplicationform = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const mutiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operation")

// funções
const ceateTable = (number, multiplicatorNumber) =>{
    multiplicationTable.innerHTML="";

    for(i=1;i<=multiplicatorNumber;i++){
        const result = number * i
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result"> ${result}</div>
        </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template,"text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row)
    }

    //console.log(number,multiplicatorNumber)
}


// eventos

mutiplicationform.addEventListener("submit", (e)=>{
    e.preventDefault()
    const multiplicationNumer = +numberInput.value;
    const multiplicatorNumber = +mutiplicationInput.value;
    if(!multiplicatorNumber || !multiplicationNumer) return;
    
    ceateTable(multiplicationNumer,multiplicatorNumber)

})