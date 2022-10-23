var express = require('express');


var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(4200, function () {
    console.log('Listening to Port 4200');
});