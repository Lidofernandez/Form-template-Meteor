//code shared between client and server

Schemas = {};
Collections = {};

Schemas.Person = new SimpleSchema({
  firstName: {
    type: String,
    index: 1,
    unique: true
  },
  lastName: {
    type: String,
    optional: true
  },
  age: {
    type: Number,
    optional: true
  }
});

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);
