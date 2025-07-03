require('dotenv').config();
const mysql = require('mysql2/promise');
const knexLib = require('knex');

let knex; 

async function initDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`);
  await connection.end();
  console.log(`Banco ${process.env.DB_DATABASE} OK!`);

  knex = knexLib({
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE
    }
  });

  return knex;
}

function getKnex() {
  if (!knex) throw new Error('Knex não inicializado. Chama initDb() primeiro!');
  return knex;
}

async function destroyDb() {
  if (knex) {
    await knex.destroy();
    knex = null;
  }
}

module.exports = {
  initDb,
  getKnex,
  destroyDb
};
