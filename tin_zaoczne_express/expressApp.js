var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'twig');

app.get('/hello', function (req, res) {
    res.send('hello world')
});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/formdata', function (req, res) {
    res.render('template.twig', { data: req.body });
});

// curl --header "Content-Type: application/json" --request POST --data '{"name":"Jan", "surname":"Kowalski", "index": "12345"}' http://localhost:3000/jsondata
var strings;
app.post('/jsondata', function (req, res) {
    strings = req.body;
    res.render('template.twig', {data : strings});
  });
app.get('/jsondata', function(req, res) {
    res.render('template.twig', {data : strings});
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});