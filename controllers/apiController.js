module.exports = function(app) {
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe' });
    });

    app.post('/api/person', function(req, res) {
        // save to db
    });

    app.delete('/api/person/:id', function(req, res) {
        // delete
    });
};