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
// canvas.addEventListener("mousemove", (e) =>{
//     for (let i = 0; i < 20; i++) {
//         atoms.push(new Atom(e.x , e.y))
        
//     }
// })



const animate = () => {
    atoms.forEach((atom,index) => {
        ctx.fillStyle = 'white'
        atom.draw();
        atom.updateSpeed();
        // atom.updateDown();
        atom.updateSize();

        if(atom.radius < 0.3){
            atoms.splice(index,1);
        }
    })
    ctx.save();
    // ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
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
        this.radius = Math.random() * 1 + 2;
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
const point = {
    x:canvas.width/2,
    y:canvas.height/2
}
const velocidade = 20;
onx = velocidade;
ony = velocidade;
//Auto Atom
const generatAtoms = () =>{
    atoms.push(new Atom(point.x,point.y));
    console.log(point.x, point.y)
    const maxW = canvas.width;
    const maxH = canvas.height;
    console.log(maxH,maxW)
    
    if(point.x >= maxW){
        onx = -velocidade;
    }
    if(point.y >= canvas.height){
        ony = -velocidade;
    }
    if(point.x <= 0){
        onx = velocidade;
    }
    if(point.y <= 0){
        ony = velocidade;
    }
    point.x = point.x + onx;
    point.y = point.y + ony;
    
    requestAnimationFrame(generatAtoms);

}
generatAtoms();