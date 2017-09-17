/** Professionnels */
Pros = new Mongo.Collection("pros");
Pros.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    profession: {
        type: String,
        label: "Profession"
    }
}, { tracker: Tracker }));