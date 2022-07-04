const express = require('express')


const app = express()
const port = process.env.PORT || 5000

// added by Kap
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Welcome to Team 7\'s backend') test
    res.render('index')
})

app.listen(port)