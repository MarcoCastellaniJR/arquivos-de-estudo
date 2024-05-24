const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

//ctx.stroke();

// canvas.addEventListener("mousemove", (e) =>{
//     ctx.beginPath();
//     ctx.rect(e.x,e.y,10,10);
//     //ctx.fill();
//     console.log(e.x , e.y)
//     //console.log(e.y)
// })



let atoms = [];
canvas.addEventListener("click", (e) =>{
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x , e.y))
        console.log("hello");
        
    }
})

const animate = () => {
    atoms.forEach(atom => {
        atom.draw();
        atom.update();
    })
    requestAnimationFrame(animate)
}

animate();
// canvas.addEventListener("mousemove", (e) =>{
//     ctx.beginPath();
//     ctx.arc(e.x,e.y,20,0,Math.PI*2);
//     ctx.fill();
//     console.log(e.x , e.y)
//     //console.log(e.y)
//     // arch parans
//     // x,y,radius,startAngle,endAngle,counterclockwise-boolean
// })


class Atom{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 8 + 2;
        this.speedX = Math.random() * 4 - 2; // -2...+2
        this.speedY = Math.random() * 4 - 2; // -2...+2
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
    }
}

