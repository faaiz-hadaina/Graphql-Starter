const express = require('express');

const app = express();

const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get('/', (req: any, res: any) => {
  res.send('Weldone Faaiz');
});

app.listen(3000, () => {
  console.log('The application is listening on port 3000');
});
