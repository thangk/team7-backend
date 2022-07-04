const express = require('express')
const app = express()

// added by Kap
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Welcome to Team 7\'s backend') test
    res.render('index')
})

app.listen(3000)