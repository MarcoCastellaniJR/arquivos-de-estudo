const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const basePath = path.join(__dirname, 'templates')
app.use(express.static('public'))
//Passo 01 para usa express
// chamar o express como um require e depois colocar ele funcionando
// Dentro da const app.
// Precisamos decidir a porta que será utilizada

// 02 
// Fazer o express "ouvir" a porta e a aplicação
// Criar a pagina de erro se quiser
// criar a home '/' res.sendFile > index.html


// Parte de Rotas
// Criar as pastas de rrotas que vão ser utilizadas e seus respectivos index

const users = require('./user')
const objects = require('./object')


// Ligando as configurações para funcionar o JSON
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  
app.use(express.json())



// Nesse caso , quando o site for todo funcional e tiver login para realizar funçoes
// Ele testa se está logado ou não, nesse caso o authStatus está fixo em True
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

// Parte que está sendo ligado o Roteamento 
app.use('/user', users)
app.use('/object', objects)

// Nesse caso estamos configurando o "padrão"
// Ao acessar a porta 5000, sem nada na frente ele é o 5000/
// Então ele responde com o Index.html
app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})
// Erro, quando passa por todas as página e iria retornar 404
// ele redireciona nesse caso para 404, onde tem outras opções
app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})
// criando o listen pela porta indicada
app.listen( port, () => {
    console.log(`App rodando normalmente na porta ${port}`);
})