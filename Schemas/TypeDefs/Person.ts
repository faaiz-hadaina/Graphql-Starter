export {};
const graphql = require('graphql');
const db = require('../../db');
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;
const Person = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (person: any) => person.id
    },
    firstName: {
      type: GraphQLString,
      resolve: (person: any) => person.firstName
    },
    lastName: {
      type: GraphQLString,
      resolve: (person: any) => person.lastName
    },
    email: {
      type: GraphQLString,
      resolve: (person: any) => person.email
    }
  })
});
module.exports = Person;
