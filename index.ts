import express from 'express';
const app = express();
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const authors = [
  { id: 1, name: 'JK Rowling' },
  { id: 2, name: 'JK Tolkien' },
  { id: 3, name: 'Brant Weeks' }
];
const books = [
  { id: 1, name: 'Adewale Ayuba', authorid: 1 },
  { id: 2, name: 'Faaiz Ayodeji', authorid: 1 },
  { id: 3, name: 'Hadaina Hikmat', authorid: 1 },
  { id: 4, name: 'Aminat Bamidele', authorid: 2 },
  { id: 5, name: 'Hadaina Rukayat', authorid: 2 },
  { id: 6, name: 'Adebolu Khalifa', authorid: 2 },
  { id: 7, name: 'Uthman Opeyemi', authorid: 3 },
  { id: 8, name: 'Ogunbanjo Faahd', authorid: 3 }
];
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This is a Author',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) }
  })
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This is a book',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorid: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book: any) => {
        return authors.find((author) => author.id === book.authorid);
      }
    }
  })
});

const DefaultQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A specific book',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent: any, args: any) =>
        books.find((book) => book.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List All books',
      resolve: () => books
    },
    author: {
      type: BookType,
      description: 'A specific author',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent: any, args: any) =>
        authors.find((author) => author.id === args.id)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List All authors',
      resolve: () => authors
    }
  })
});

const schema = new GraphQLSchema({
  query: DefaultQueryType
});
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);
app.get('/', (req, res) => {
  res.send('Weldone Faaiz2');
});

app.listen(3000, () => {
  console.log('The application is listening on port 3000');
});
