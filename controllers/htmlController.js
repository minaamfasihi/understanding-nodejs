var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

module.exports = function(app) {
    // app.get('/', function(req, res) {
    //     res.send(`<html><head><link href="assets/style.css" type="text/css" rel="stylsheet" /></head><body><h1>Hellso world</h1></body></html>`);
    // });

    app.get('/', function(req, res) {
        res.render('index');
    });

    // app.get('/person/:id', function(req, res) {
    //     res.send('<html><head></head><body><h1>Person: </h1>' + req.params.id + '</body></html>');
    // });

    app.get('/person/:id', function(req, res) {
        res.render('person', {
            ID: req.params.id,
            Qstr: req.query.qstr
        });
    });

    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });

    app.post('/personjson', jsonParser, function(req, res) {
        res.send('Thank you for JSON');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });

};