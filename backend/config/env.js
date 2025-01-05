const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    API_PORT: process.env.API_PORT,
    DB_URI: process.env.DB_URI,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
};

