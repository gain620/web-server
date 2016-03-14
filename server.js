var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

// /about
// About Us
app.get('/about', function (req, res) {
	res.send('About us: ');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function () {
	console.log('Server started on port :'+PORT);
});