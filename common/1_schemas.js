Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

Schemas.Person = new SimpleSchema({
  jobTitle: {
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

var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);
