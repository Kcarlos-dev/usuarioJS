require('dotenv').config();

const mysql = require('mysql2/promise')
const { Sequelize } = require('sequelize')

const NodeDB = (async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`)
    await connection.end()

    const sequelize = new Sequelize(
        process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: "mysql",
            logging: false
        })

    await sequelize.authenticate()
        .then(() => console.log("Conectado ao banco de dados"))
        .catch(err => console.log('Erro ao criar o banco:', err))
    

    return sequelize;

})()

module.exports = NodeDB;

