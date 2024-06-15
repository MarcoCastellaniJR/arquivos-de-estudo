var express = require('express')
var router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')
//  eu não sei se tem motivo específico para ser VAR e não CONST nesse caso
// damos um require no express
// Agora a diferença é que não se chama APP, e sim router
// e ele chama express.Router(), indicando que é uma pagina que vai controlar as rotas 

router.get('/nuser', (req, res) => {
    res.sendFile(`${basePath}/new_user.html`)
})

router.post('/snuser',(req, res) => {
    console.log(`You had Register the Client: ${req.body.name}`);
    
})

// NÃO ESQUECER DE DAR O MODULE.EXPORTS = ROUTER NO ARQUIVO QUE ESTÁ ROTEANDO
module.exports = router