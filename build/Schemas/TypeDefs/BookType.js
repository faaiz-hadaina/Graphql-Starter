"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql = require('graphql');
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;
const BookType = new GraphQLObjectType({
    name: 'Books',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        authorid: { type: GraphQLString }
    })
});
module.exports = BookType;
