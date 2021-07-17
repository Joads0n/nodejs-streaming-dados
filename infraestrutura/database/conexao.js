const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'joadson',
    password: '1234',
    database: 'agenda_petshop'
});

module.exports = conexao;