const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

app.get('/', (req,res) => {
    res.render('home')
})


// CONNETCTION POOOLL




// POST DE DELETE

app.post('/books/remove/:id', function (req, res) {
    const id = req.params.id
  
    const sqlString = `DELETE FROM books WHERE id = ${id}`
  
    conn.query(sqlString, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/books`)
    })
  })

// UPDATE MYSQL 
// GET THE ID BOOK TO EDIT
app.get('/books/edit/:id', (req,res) => {
    const id = req.params.id
    const sqlString = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sqlString, function (err, data) {
        if(err){
            console.log(`We can't find this book with ID:${id}`);
            console.log(err);
            return
        }
        const book = data[0]
        res.render('editbook', {book})
    })
})

app.post('/books/update', (req,res) => {
    const id = req.body.id
    const title = req.body.title
    const pages = req.body.pagety
    const sqlString = `UPDATE books SET title = '${title}' , pagety = ${pages} WHERE ID = ${id}`
    conn.query(sqlString,function (err) {
        if(err) {
            console.log("We can't update this book");
            console.log(err);
            return
        }
        //console.log(data);
        res.redirect(`/books/${id}`)
    })
})


// SELECT ALL FROM DATA BASED LIST FORM
app.get('/books', (req, res) => {
    const sqlString = 'SELECT * FROM books'
    conn.query(sqlString, function (err , data){
        if(err){
            console.log("We have some problem to take all the books");
            console.log(err);
            return
        }
        const books = data
        console.log(books);
        res.render('books', { books })

    })
})




// SELECT ON DATA BASED ------------
app.get('/books/:id', (req,res) => {
    const id = req.params.id
    const sqlString = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sqlString,function(err ,data){
        if(err){
            console.log(`Não encontramos os Livro de ID:${id}`);
            res.redirect('/')
        }
        const book = data[0]
        res.render('book',{book})
    })
})


// INSERT ON DATA BASE -------------
app.post('/books/insertbooks', (req,res) => {
    const title = req.body.title
    const pagety = req.body.pagety
    const sqlString = `INSERT INTO books(title, pagety) VALUES ('${title}','${pagety}')`
    conn.query(sqlString , function (err) {
        if(err){
            console.log("We have some problem with your Book");
            console.log(err);
        }
        console.log("Livro cadastrado corretamente");
        console.log(`${title} with ${pagety} pags`);
        res.redirect('/')
    })
})


// MYSQL CONNECTION -------------
const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'node_project'
})

conn.connect(function (err) {
    if(err) {
        console.log(err);
    }
    app.listen(3000)
    console.log("Conectou ao mysql");
})