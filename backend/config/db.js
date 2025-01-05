const mariadb = require('mariadb');
const { DB_URI, DB_USER, DB_PASSWORD, DB_DATABASE } = require('./env');


const pool = mariadb.createPool({
  host: DB_URI,   // или IP сервера MariaDB
  user: DB_USER,        // пользователь MariaDB
  password: DB_PASSWORD, // пароль
  database: DB_DATABASE,  // база данных, которую создадим
  connectionLimit: 5
});

module.exports = pool;
