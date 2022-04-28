//import
var express = require("express");
var request = require('request');

var app = express();

var port = 3000;

//Static Pages
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

//set views
app.set("views", "./views");
app.set("view engine", "ejs");

//render ejs
app.get("", (req, res) => {
  res.render("index");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/validate', (req, res) => {
  let email = req.query.email;
  //console.log(email)
  let Url = `https://api.mailboxvalidator.com/v1/validation/single?key=DI11MUVHJ3RMBP37UTOR&email=${email}`
  
  request(
    { url: Url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

//Listne to port 3000
app.listen(process.env.PORT || port, () => console.info(`Listning to port ${port}`));
