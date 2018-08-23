var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'teste123',
        database: 'casadocodigo'
    })
};

module.exports = function () {
    return createDBConnection;
};