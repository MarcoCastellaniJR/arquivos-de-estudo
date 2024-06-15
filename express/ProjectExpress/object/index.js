const { log } = require('console')
var express = require('express')
var router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')
//  eu não sei se tem motivo específico para ser VAR e não CONST nesse caso
// damos um require no express
// Agora a diferença é que não se chama APP, e sim router
// e ele chama express.Router(), indicando que é uma pagina que vai controlar as rotas 

router.get('/nobject', (req, res) => {
    res.sendFile(`${basePath}/new_item.html`)
})

router.post('/snobject',(req, res) => {
    console.log(`You have Creatd the Item: ${req.body.name}`);

    res.sendFile(`${basePath}/new_item.html`)
})

module.exports = router