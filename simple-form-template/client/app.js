//client only code

Template.people.helpers({
	people: function () {
		return People.find({});
	}
}); 

Template.people.events({
});
