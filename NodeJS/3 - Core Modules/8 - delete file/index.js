

const fs = require('fs');

fs.unlink('log.txt', function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('Arquivo removido')
})