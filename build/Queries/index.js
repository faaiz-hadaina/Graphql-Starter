'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const graphql = require('graphql');
const { GraphQLInt, GraphQLList, GraphQLObjectType } = graphql;
const BookType = require('../Schemas/TypeDefs/BookType.ts');
const books = require('../bookstore.json');
const DefaultQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getAllBooks: { type: GraphQLList(BookType), resolve: () => books },
    getBookByID: {
      type: BookType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => books.find((book) => book.id === args.id)
    }
  })
});
module.exports = DefaultQueryType;
