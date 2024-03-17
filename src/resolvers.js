// const { BookType, UserType, RootQueryType } = require('./schema');  // Import your schema types
// const { Book, User } = require('../db/models');  // Import your database models (assuming they exist)
// const resolvers = {
//     Query: {
//       books: async (parent, args, context) => {
//         try {
//           const books = await Book.findAll();  // Fetch all books from the database using Sequelize
//           return books;
//         } catch (error) {
//           console.error(error);
//           throw new Error('Error fetching books');
//         }
//       },
//       // Add resolvers for other query fields
//     },
//   };
//   const { BookType, UserType, RootQueryType } = require('./schema');
// const { Book, User } = require('../db/models');
// const resolver = {
//     Mutation: {
//       addBook: async (parent, args, context) => {
//         try {
//           const { title, author } = args;
//           const newBook = await Book.create({ title, author });  // Create a new book using Sequelize
//           return newBook;
//         } catch (error) {
//           console.error(error);
//           throw new Error('Error adding book');
//         }
//       },
//     },
//     // ... other resolvers
//   };
//   resolver.Mutation.register = async (parent, args, context) => {
//     try {
//       const { username, email, password } = args;
//       // Implement password hashing logic here (before creating the user)
//       const newUser = await User.create({ username, email, password });  // Hash password before creating user
//       return newUser;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Error registering user');
//     }
//   };
//   resolver.Mutation.login = async (parent, args, context) => {
//     try {
//       const { username, password } = args;
//       // Implement user validation logic here (check username and password against database)
//       const user = await User.findOne({ where: { username } });  // Find user by username
//       if (!user || password !== user.password) {  // Replace with secure password comparison (using bcrypt)
//         throw new Error('Invalid username or password');
//       }
//       const token = generateToken(user.id);
//       return { token, user };
//     } catch (error) {
//       console.error(error);
//       throw new Error('Error logging in');
//     }
//   };
//   resolver.Mutation.borrowBook = async (parent, args, context) => {
//     try {
//       const { bookId, userId } = args;
//       const book = await Book.findByPk(bookId);
//       if (!book) {
//         throw new Error('Book not found');
//       }
//       if (book.ownerId) {  // Check if book already has an owner (borrowed)
//         throw new Error('Book is currently unavailable');
//       }
//       // ... rest of the resolver logic (update owner if approved)
//     } catch (error) {
//       console.error(error);
//       throw new Error('Error borrowing book');
//     }
//   };
//   resolver.Mutation.requestBorrowBook = async (parent, args, context) => {
//     try {
//       const { bookId, userId } = args;
//       // Implement logic to create a borrowing request record or notify book owner
//       return { message: 'Borrowing request submitted successfully' };
//     } catch (error) {
//       console.error(error);
//       throw new Error('Error requesting to borrow book');
//     }
//   };


const { BookType, UserType, RootQueryType } = require('./schema');
const { Book, User } = require('../db/models');

const resolvers = {
  Query: {
    books: async (parent, args, context) => {
      try {
        const books = await Book.findAll();
        return books;
      } catch (error) {
        console.error(error);
        throw new Error('Error fetching books');
      }
    },
    // ... other query resolvers
  },
  Mutation: {
    addBook: async (parent, args, context) => {
      try {
        const { title, author } = args;
        const newBook = await Book.create({ title, author });
        return newBook;
      } catch (error) {
        console.error(error);
        throw new Error('Error adding book');
      }
    },
    register: async (parent, args, context) => {
      try {
        const { username, email, password } = args;
        // Implement password hashing logic here (before creating the user)
        const newUser = await User.create({ username, email, password }); // Hash password before creating user
        return newUser;
      } catch (error) {
        console.error(error);
        throw new Error('Error registering user');
      }
    },
    login: async (parent, args, context) => {
      try {
        const { username, password } = args;
        // Implement user validation logic here (check username and password against database)
        const user = await User.findOne({ where: { username } }); // Find user by username
        if (!user || password !== user.password) {  // Replace with secure password comparison (using bcrypt)
          throw new Error('Invalid username or password');
        }
        const token = generateToken(user.id);
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error('Error logging in');
      }
    },
    borrowBook: async (parent, args, context) => {
      try {
        const { bookId, userId } = args;
        const book = await Book.findByPk(bookId);
        if (!book) {
          throw new Error('Book not found');
        }
        if (book.ownerId) { // Check if book already has an owner (borrowed)
          throw new Error('Book is currently unavailable');
        }
        // ... rest of the resolver logic (update owner if approved)
      } catch (error) {
        console.error(error);
        throw new Error('Error borrowing book');
      }
    },
    requestBorrowBook: async (parent, args, context) => {
      try {
        const { bookId, userId } = args;
        // Implement logic to create a borrowing request record or notify book owner
        return { message: 'Borrowing request submitted successfully' };
      } catch (error) {
        console.error(error);
        throw new Error('Error requesting to borrow book');
      }
    },
  },
};

module.exports = resolvers;

  