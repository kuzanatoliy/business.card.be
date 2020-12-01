const DEFAULT_ENV = require('./defautlt');

module.exports = {
  database: process.env.DB_NAME || DEFAULT_ENV.DB_NAME,
  dialect: process.env.DB_DIALECT || DEFAULT_ENV.DB_DIALECT,
  host: process.env.DB_HOST || DEFAULT_ENV.DB_HOST,
  password: process.env.DB_PASSWORD || DEFAULT_ENV.DB_PASSWORD,
  port: process.env.DB_PORT || DEFAULT_ENV.DB_PORT,
  username: process.env.DB_USERNAME || DEFAULT_ENV.DB_USERNAME,
};
