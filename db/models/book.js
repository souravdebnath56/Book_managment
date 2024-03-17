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
  ownerId: {
    type: Sequelize.INTEGER,  // Data type should match user ID type
    references: {
      model: 'User',
      key: 'id',
    },
  },
  // Add other book properties as needed
});

module.exports = Book;