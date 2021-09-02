export {};
const graphql = require('graphql');
const { GraphQLInt, GraphQLList, GraphQLObjectType } = graphql;
const BookType = require('../Schemas/TypeDefs/BookType');
const Person = require('../Schemas/TypeDefs/Person');
const books = require('../bookstore.json');
const db = require('../db');
const DefaultQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getAllBooks: { type: GraphQLList(BookType), resolve: () => books },
    people: {
      type: new GraphQLList(Person),
      args: {
        id: { type: GraphQLInt }
      },
      resolve(root: any, args: any) {
        return db.models.person.findAll({ where: args });
      }
    },
    getBookByID: {
      type: BookType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent: any, args: any) =>
        books.find((book: any) => book.id === args.id)
    }
  })
});

module.exports = DefaultQueryType;
