module.exports = {
    development: {
      username: 'sourav1123',
      password: '#sourav789',
      database: 'book_managment',
      host: 'localhost',
      dialect: 'mysql'  // Adjust dialect for your database type (e.g., 'postgres' for PostgreSQL)
    },
    test: {
      username: 'your_test_username',
      password: 'your_test_password',
      database: 'your_test_database_name',
      host: 'your_test_database_host',
      dialect: 'mysql'  // Adjust dialect as needed
    },
    production: {
      username: 'your_production_username',
      password: 'your_production_password',
      database: 'your_production_database_name',
      host: 'your_production_database_host',
      dialect: 'mysql'  // Adjust dialect as needed
    }
  };
  const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',  // Adjust dialect for your database type
  host: process.env.DB_HOST,
  logging: false,  // Optional: Disable logging for cleaner console output
});

module.exports = sequelize;
  