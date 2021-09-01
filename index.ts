import express from 'express';
import { GraphQLBoolean, GraphQLString } from 'graphql';
const app = express();
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

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
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { type: GraphQLString, resolve: () => 'Hello World' }
    })
  })
});
app.use(
  '/graphql',
  expressGraphQL({
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
