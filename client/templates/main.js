Template.main.helpers({

  children: function() {
    return Children.find({parent_id: Meteor.userId()});
  }

});

Template.main.events({

  "submit .new-child": function(event) {

    var name = event.target.childName.value;
    var age = event.target.childAge.value;

    
    Meteor.call('addChild', name, age);
    
    event.target.childName.value = '';
    event.target.childAge.value = '';

    return false;

  }

});

