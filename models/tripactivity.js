var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// GET
exports.all = function (callback) {
    db.get().collection('trips').find().toArray(function (err, docs) {
        callback(err, docs);
    })
};