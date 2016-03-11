var MongoClient = require('mongodb').MongoClient,
    settings = require('./config.js'),
    Guid = require('Guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var myCollection = db.collection("COLLECTIONNAME");

        // setup your body
        exports.createComment = function(comment, name) {
            // throws an error if there has been invalid input

            // return a promise that resolves the new comment
            return myCollection.insertOne({ _id: Guid.create().toString(), comment: comment }).then(function(newDoc) {
                return newDoc.insertedId;
            });
        };

        exports.getAllComments = function() {
            // write the body here
            // return a promise that resolves to all the comments in your collection.
        }
    });
