module.exports = function (app) {
    app.get('/products', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo'
        });

        connection.query('SELECT * FROM livros', function(err, result) {
            res.render('products/list', {lista: result});
        });
        connection.end()
    });
};