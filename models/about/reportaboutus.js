var db = require('../../db');
var ObjectID = require('mongodb').ObjectID;

// GET
exports.all = function (callback) {
    db.get().collection('reportaboutus').find().sort({name: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};