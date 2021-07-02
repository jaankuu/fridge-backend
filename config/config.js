// config.js
require('dotenv').config();

console.log('api url', process.env.DB_URL) // just to check

module.exports = {
  "development": {
    "url": process.env.DB_URL,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}