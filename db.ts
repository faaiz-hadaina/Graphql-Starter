export {};
const Sequelize = require('sequelize');
const _ = require('lodash');
const Faker = require('faker');

const Conn = new Sequelize('customers', 'postgres', '1234', {
  dialect: 'postgres',
  host: 'localhost'
});

const Person = Conn.define('person', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

const Post = Conn.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//Relationships
Person.hasMany(Post);
Post.belongsTo(Person);

Conn.sync({ force: true }).then(() => {
  _.times(10, () => {
    return Person.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email()
    }).then((person: any) => {
      return person.createPost({
        title: `Sample title by ${person.firstName}`,
        content: 'This is a sample article'
      });
    });
  });
});

module.exports = Conn;
