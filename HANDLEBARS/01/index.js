const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const hbs = exphbs.create({
    partialsDir:['views/partials/'],
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.use(express.static('public'))


app.get('/dashboard',(req, res) => {
    const items = ['01', '02', '03']

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    }    
    res.render('blogpost', { post })
})

app.get('/blog', function (req, res){
    const posts = [
        {
            title:"Aprender Node.js",
            category:"JavaScript",
            body:"Lálalalalala",
            comments:5,
        },
        {
            title:"Aprender PHP",
            category:"PHP",
            body:"Lálalalalala",
            comments:5,
        },
        {
            title:"Aprender Python",
            category:"Python",
            body:"Lálalalalala",
            comments:5,
        }
    ]
    res.render('blog', {posts})
})

app.get('/', (req, res) => {
    const user = {
        name:"Marco",
        surname:"Castellani"
    }
    const auth = true
    const approved = true

    res.render('home',{user: user, auth, approved})
})


app.listen(3000, () => {
    console.log("App funcionando");
})