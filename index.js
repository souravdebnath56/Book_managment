// const sequelize = require('./db/configure');

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection to database established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema');

// const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }));

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const sequelize = require('./db/configure');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the application on error
  }
})();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schema');
const resolvers = require('./resolvers'); // Combined resolvers file

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
