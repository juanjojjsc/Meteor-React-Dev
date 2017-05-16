import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

//Create Publication
if (Meteor.isServer) {
  Meteor.publish('linksPub', function () {
    return Links.find({userId: this.userId});
  });
}

//Create Methods
Meteor.methods({

});
