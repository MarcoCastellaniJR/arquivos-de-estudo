const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')

const User = require("./models/User")
const Address = require("./models/Address")



const app = express()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.use(express.static('public'))

// CREATE NEW USER -----------------------------------------------------------------------
app.get('/users/create', (req,res) => {
    res.render('adduser')
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ raw: true , where: { id: id}})
    res.render('userview', { user })
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.destroy({ raw: true , where: { id: id}})
    res.redirect('/')
})

app.get('/users/edit/:id', async (req,res) => {
    const id = req.params.id
    // const user = await User.findOne({ raw: true , where: { id: id}})
    const user = await User.findOne({ include: Address , where: { id: id}})
    // res.render('useredit', { user })
    res.render('useredit', { user: user.get({plain: true}) })
})

app.post('/users/update' , async (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
    if(newsletter === 'on'){
        newsletter=true
    }else{
        newsletter=false
    }
    const userData = {
        id,name,occupation,newsletter
    }

    //console.log(req.body);
    await User.update(userData, {where: { id:id }})
    res.redirect(`/`)
})

app.post('/address/create', async (req,res) => {
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city
    const UserId = req.body.UserId

    const address = {
        UserId,
        street,
        number,
        city
    }
    await Address.create(address)
    res.redirect(`/users/edit/${UserId}`)
})








app.post('/users/create' , async (req,res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
    if(newsletter === 'on'){
        newsletter=true
    }
    //console.log(req.body);
    await User.create({name,occupation,newsletter})
    res.redirect('/')
})

app.get('/', async (req,res) => {
    // find all foi colocando dentro de uma const para poder colocar o await, para esperar os usuários chegarem
    // e não dar continuidade sem os dados necessários
    const users = await User.findAll({raw: true})
    console.log(users);
    res.render('home',{ users: users})
})

app.post('/address/delete', async (req,res) => {
    const id = req.body.id
    const UserId = req.body.UserId
    await Address.destroy({
        where: {id: id}
    })
    res.redirect(`/users/edit/${UserId}`)
})


























app.get('/', (req,res) => {
    res.render('home')
})

// Nessa forma de ligar a conexão ele garante que a conexão só vai ligar se todas as
// tabelas estiverem syncronizadas e funcionais
conn
//.sync({force: true})
.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))

// CONNETCTION POOOLL

