const express = require('express')
const app = express()
const port = 3000 // variável de ambiente

const path = require('path')

// Aula css
app.use(express.static('public'))



const basePath = path.join(__dirname, 'templates')

const users = require('./users')

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  
  app.use(express.json())

const checkAuth = function ( req,res,next) {
    req.authStatus = true
    if(req.authStatus) {
        console.log('Está logado, pode continuar');
        next()
    }else{
        console.log('Não está logado, façao login para continuar');
        next()
    }
}
app.use(checkAuth)







app.use('/users', users)

app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen( port , () => {
    console.log(`App rodando na porta ${port}`);
}) 
