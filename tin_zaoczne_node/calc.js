const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// http://127.0.0.1:3000/add?x=2y=1
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var htmlContent = '';
  // /add?x=18y=2
  var queryString = new String(req.url);//[/add?x=18y=2]

  var regex = /^\/(add|sub|mul|div)\?x\=(\+|\-)?\d+y\=(\+|\-)?\d+$/;
  if (queryString.match(regex) == null) {
    htmlContent = '<html><body><h2>' + 'Niepoprawny format url' + '</h2></body><html>';
  }
  else {
    var op = queryString.match(/[a-z]{3}/gi)[0]; //add,sub,mul,div
    var numbers = queryString.match(/(\+|\-)?\d+/gi); //String(tmp[1]).match(/\d+/gi);

    var firstNumber = Number(numbers[0]); // [add] [x] [18][y] [2]
    var secondNumber = Number(numbers[1]);

    var opMark = new String('');
    var result = () => {
      switch (op) {
        case 'add':
          opMark = '&#43;';
          return firstNumber + secondNumber;
        case 'sub':
          opMark = '&#8722;';
          return firstNumber - secondNumber;
        case 'mul':
          opMark = '&#10005;';
          return firstNumber * secondNumber;
        case 'div':
          opMark = '&#247;';
          if (secondNumber != 0) {
            return firstNumber / secondNumber;
          }
          else {
            return 'Nie wolno dzielić przez 0 :P'
          }
        default:
          return 'Operator niepoprawny.'
      }
    };

    var r = result();
    var start = '';
    var end = '';
    if (secondNumber < 0) {
      start = '(';
      end = ')';
    }
    htmlContent = '<html><body><h2>' +
      firstNumber + ' ' + opMark + ' ' + start + secondNumber + end + ' ' +
      '=' + ' ' + r + '</h2></body><html>';
  }
  res.end(htmlContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});