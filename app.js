//import
var express = require('express')
var path = require('path')
var app = express()
var validator = require("email-validator")

var port = 3000;

//Listne to port 3000
app.listen(port, ()=> console.info(`Listning to port ${port}`));


//Static Pages
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))

//view html
app.get('', (req, res) => {
    res.sendFile(__dirname + '/View/index.html')
})