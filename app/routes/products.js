var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) {
    app.get('/products', function (req, res) {
        var connection = connectionFactory();

        connection.query('SELECT * FROM livros', function(err, result) {
            res.render('products/list', {lista: result});
        });
        connection.end()
    });
};