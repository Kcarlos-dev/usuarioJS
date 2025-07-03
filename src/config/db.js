require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

connection.connect((err) => {

    connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`, (err) => {
        if (err) {
            console.error('Erro ao criar o banco:', err);
            return;
        }
            console.log(`Conectado ao banco ${process.env.DB_DATABASE}`);

    });
});

module.exports = connection;
