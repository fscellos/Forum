Template.profesionnels.helpers({
   rows : function() {
        return Pros.find({});
   }
});

Template.profesionnels.events({
   'click .glyphicon-remove' : function(event, instance)
   {
       Pros.remove({_id : event.target.id});
   }
});