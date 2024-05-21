let items = document.querySelectorAll(".item");
let leftWrapper = document.querySelector(".left");
let rightWrapper = document.querySelector(".right");

items.forEach( (item) => {
    item.addEventListener("dragstart", (e) =>{
        let selected = e.target;

        rightWrapper.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        rightWrapper.addEventListener("drop", (e) => {
            rightWrapper.appendChild(selected);
            selected = null;
        })
        leftWrapper.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        leftWrapper.addEventListener("drop", (e) => {
            leftWrapper.appendChild(selected);
            selected = null;
        })

        
    })
})


document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('myInput').value;

    input.addEventListener('focus', () => {
        input.placeholder = '';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.placeholder = 'Enter new Task here';
        }
    });
});

function criarTask(){
    let task = document.getElementById('myInput');
    leftWrapper.appendChild(task);
}