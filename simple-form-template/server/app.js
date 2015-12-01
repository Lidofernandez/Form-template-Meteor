//server only code


Meteor.publish(null, function () {
  return People.find();
});

Meteor.startup(function () {
  People.remove({});
  
  var peeps = [
  {
   firstName: 'Bob',
   lastName: 'Costas',
   age: 65
 },
 {
  firstName: 'Bobby',
  lastName: 'Guy',
  age: 36
}
];
_.each(peeps, function (peep) {
  People.insert({
    firstName: peep.firstName,
    lastName: peep.lastName,
    age: peep.age
  });
});
});

// Include this if 'insecure' is removed
//People.allow({
//  insert: function () {
//    // please have solid checks here
//    return true;
//  },
//  remove: function () {
//    // please have solid checks here
//    return true;
//  }
//});