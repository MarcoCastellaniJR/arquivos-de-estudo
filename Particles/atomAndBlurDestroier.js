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
canvas.addEventListener("mousemove", (e) =>{
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x , e.y))
        
    }
})




const animate = () => {
    atoms.forEach((atom,index) => {
        atom.draw();
        atom.updateSpeed();
        // atom.updateDown();
        atom.updateSize();

        if(atom.radius < 0.3){
            atoms.splice(index,1);
        }
    })
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.restore();
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

    updateSpeed() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    updateSize(){
        this.radius -= 0.1;
    }
    updateDown(){
        this.y += 5;
        this.x += this.speedX;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
    }
}

