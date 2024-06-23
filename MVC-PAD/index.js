const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

// Models
const Task = require('./models/Tasks')



// Routes
const tasksRoutes = require('./routes/tasksRoutes')



app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')





app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())
app.use(express.static('public'))
app.use('/tasks', tasksRoutes)


conn.sync()
.then( () => {
    app.listen(3000)
})
.catch((err) => console.log(`Erro na hora de conectar ou sincronizar com o Banco de dados: ${err}`))