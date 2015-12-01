Meteor.publish(null, function () {
	return People.find();
});
People.allow({
	insert: function () {
		return true;
	},
	remove: function () {
		return true;
	}
});

