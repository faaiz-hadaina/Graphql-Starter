"use strict";
const express = require('express');
const schema = require('./Schemas');
const app = express();
const { graphqlHTTP } = require('express-graphql');
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.get('/', (req, res) => {
    res.send('Weldone Faaiz');
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000');
});
