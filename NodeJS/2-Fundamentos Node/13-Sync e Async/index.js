// codigo sincrono 
const fs = require('fs');
console.log("Início");

fs.writeFileSync('arquivo.txt', 'ola');

console.log("fim");


// codigo assincrono

console.log("inicio assincrono")

fs.writeFile("arquivo2.txt", "oi" , function(err) {
    setTimeout(function() {
        console.log("ArquivoCriado!")
    },2000)
})

console.log("Fim do código");