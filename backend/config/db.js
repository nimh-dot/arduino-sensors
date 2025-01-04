const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',   // или IP сервера MariaDB
  user: 'root',        // пользователь MariaDB
  password: 'password', // пароль
  database: 'sensors',  // база данных, которую создадим
  connectionLimit: 5
});

module.exports = pool;