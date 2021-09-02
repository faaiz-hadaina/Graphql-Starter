"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const DefaultQueryType = require('../Queries');
const DefaultMutation = require('../Mutations');
const schema = new GraphQLSchema({
    query: DefaultQueryType,
    mutation: DefaultMutation
});
module.exports = schema;
