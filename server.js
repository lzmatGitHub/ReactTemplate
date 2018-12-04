//npm init
//npm install express --save

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));

//------------------------- html ---------------------------

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

//------------------------- css ----------------------------

app.get('/css/style.css', function (req, res) {
  res.sendFile(__dirname + '/css/style.css');
});

//------------------------- js -----------------------------

app.get('/js/jquery-3.3.1.min.js', function (req, res) {
  res.sendFile(__dirname + '/js/jquery-3.3.1.min.js');
});

app.get('/js/react.production.min.js', function (req, res) {
  res.sendFile(__dirname + '/js/react.production.min.js');
});

app.get('/js/react-dom.production.min.js', function (req, res) {
  res.sendFile(__dirname + '/js/react-dom.production.min.js');
});

app.get('/js/script.js', function (req, res) {
  res.sendFile(__dirname + '/js/script.js');
});

//---------------------- log of server started ---------------------

app.listen(PORT, () => {
    console.log(`React Server is listening on port ${PORT}`);
  }

);