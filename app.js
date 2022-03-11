//import
var express = require('express')
var app = express()
var validator = require("email-validator")

var port = 3000;

//Static Pages
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//set views
app.set('views','./views')
app.set('view engine', 'ejs')


//render ejs
app.get('', (req, res) => {
    res.render('index')
})

//Listne to port 3000
app.listen(port, ()=> console.info(`Listning to port ${port}`));
