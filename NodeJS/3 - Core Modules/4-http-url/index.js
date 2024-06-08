const http = require('http');

const port = 3000;

const server = http.createServer( (req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    if(!name){
        res.end(`<h1>Preencha o seu nome:</h1><form method="GET" ><input type="text" name="name"/><input type="submit" value="Enviar"/></form>`)
    }else {
        res.end(`<h1>Seja Bem-vindo ${name}!!`)
    }
    //res.end('<h1> Olá, este é meu primeiro server com HTML! </h1><p>testando</p>')
})

server.listen(port, () => {
    console.log(` Servidor rodando na porta: ${port}`)
})