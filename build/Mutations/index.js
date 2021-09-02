"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql = require('graphql');
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;
const BookType = require('../Schemas/TypeDefs/BookType');
const books = require('../bookstore.json');
const DefaultMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        // CreateNewBook: { type: GraphQLList(BookType), resolve: () => books },
        CreateNewBook: {
            type: BookType,
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString },
                authorid: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                books.push({ id: books.length + 1, name: args.name, authorid: 1 });
                return args;
            }
        }
    })
});
