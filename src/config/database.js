const DEFAULT_ENV = require('./defautlt');

module.exports = {
  username: process.env.DB_USERNAME || DEFAULT_ENV.DB_USERNAME,
  password: process.env.DB_PASSWORD || DEFAULT_ENV.DB_PASSWORD,
  database: process.env.DB_NAME || DEFAULT_ENV.DB_NAME,
  host: process.env.DB_HOST || DEFAULT_ENV.DB_HOST,
  port: process.env.DB_PORT || DEFAULT_ENV.DB_PORT,
  dialect: process.env.DB_DIALECT || DEFAULT_ENV.DB_DIALECT
}
