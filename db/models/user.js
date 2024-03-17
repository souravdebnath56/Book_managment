const Sequelize = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance

const Book = sequelize.define('Book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Add other book properties as needed
});

module.exports = Book;