const fs = require('fs') // File System
// os módulos são importados como uma variável
// const faz ser mais seguro por não poder alterar

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})