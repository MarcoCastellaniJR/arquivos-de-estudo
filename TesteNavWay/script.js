const circleOut = document.querySelector("#main-circle")
const classCircle = document.querySelector(".in-cir")
const circle1 = document.querySelector("#inside-circle1")
const circle2 = document.querySelector("#inside-circle2")
const circle3 = document.querySelector("#inside-circle3")
const circle4 = document.querySelector("#inside-circle4")
const circle5 = document.querySelector("#inside-circle5")
const circle6 = document.querySelector("#inside-circle6")
const circle7 = document.querySelector("#inside-circle7")
const circle8 = document.querySelector("#inside-circle8")
const icones = document.querySelectorAll('i')

function testePainel(){
    circleOut.style.backgroundColor = "black"
}
let counter = 0;
circleOut.addEventListener("click",(e) => {
    if(counter==1){
        circle1.style.backgroundColor = "#333"
        circle2.style.backgroundColor = "#333"
        circle3.style.backgroundColor = "#333"
        circle4.style.backgroundColor = "#333"
        circle5.style.backgroundColor = "#333"
        circle6.style.backgroundColor = "#333"
        circle7.style.backgroundColor = "#333"
        circle8.style.backgroundColor = "#333"
        circle1.style.transform = "translateX(-10px)"
        circle2.style.transform = "translateX(+10px)"
        circle3.style.transform = "translateY(-10px)"
        circle4.style.transform = "translateY(+10px)"
        circle5.style.transform = "translate(-5px,-5px)"
        circle6.style.transform = "translate(+5px,+5px)"
        circle7.style.transform = "translate(-5px,5px)"
        circle8.style.transform = "translate(-5px,+5px)"
        icones.forEach((icone) =>{
            icone.style.color= "#333"
        })
        console.log("Fecha")
        counter--
    }else{
        circle1.style.backgroundColor = "#333"
        circle2.style.backgroundColor = "#333"
        circle3.style.backgroundColor = "#333"
        circle4.style.backgroundColor = "#333"
        circle5.style.backgroundColor = "#333"
        circle6.style.backgroundColor = "#333"
        circle7.style.backgroundColor = "#333"
        circle8.style.backgroundColor = "#333"
        circle1.style.transform = "translateX(50px)"
        circle2.style.transform = "translateX(-50px)"
        circle3.style.transform = "translateY(50px)"
        circle4.style.transform = "translateY(-50px)"
        circle5.style.transform = "translate(32px,32px)"
        circle6.style.transform = "translate(-35px,-35px)"
        circle7.style.transform = "translate(-32px,32px)"
        circle8.style.transform = "translate(35px,-35px)"
        icones.forEach((icone) =>{
            icone.style.color= "white"
        })
        console.log("foi")
        counter ++
    }
})