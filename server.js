
var express = require("express");
var app = express();

var morgan = require('morgan');

app.use(morgan('dev'));

var bodyParser = require('body-parser');  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/./client'));

app.get('/', (req, res) => {

  res.redirect('index.html');
})

app.get('/signinAdmin', (req, res) => {
  res.redirect('signinAdmin.js');
})

app.get('/signinUser', (req, res) => {
  res.redirect('signinUser.js');
})
var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on port ', port)

});