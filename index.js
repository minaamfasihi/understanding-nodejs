var express = require('express');
var mysql = require('mysql');
var app = express();
var apiController = require('./controllers/apiController');
var homeController = require('./controllers/htmlController');


var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log("Request URL: " + req.url);
    var con = mysql.createConnection({
        host: 'localhost',
        user: '<your-user-name>',
        password: '<your-password>',
        database: 'address'
    });

    con.query('select * from addr', function(err, rows) {
        if (err) throw err;
        console.log(rows);
    });
    next();
});

apiController(app);
homeController(app);

app.listen(port);
