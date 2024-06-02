let x = 10
const y = 'Marco'
const z = [1,2]
console.log(x,y,z)

// contagem de impressões
for(i=0;i<=5;i++){
    console.count(` O valor de X é ${x}, contagem `)
    x++
}

console.log("O nome é %s e ele é Programador",y)

setTimeout(()=>{
    console.clear()
},2000)