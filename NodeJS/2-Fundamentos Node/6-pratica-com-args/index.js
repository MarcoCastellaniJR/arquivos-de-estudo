const minimist = require("minimist")

// externo
const args = minimist(process.argv.slice(2))

//interno

//const meuModulo = require('./soma.js')
//const sum = meuModulo.sum

const sum = require('./soma').sum

let a = parseInt(args['a'])
let b = parseInt(args['b'])
sum(a,b)