const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      author: { type: GraphQLString },
      // Add other book properties as needed
    }),
  });
  const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: { type: GraphQLInt },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
      // Add other user properties as needed
    }),
  });
  const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      books: {
        type: new GraphQLList(BookType),
        resolve: (parent, args, context) => {
          // Add logic to fetch all books from the database (covered later)
        },
      },
      // Add other query resolvers as needed
    }),
  });