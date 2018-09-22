var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// GET

exports.getDocs = function (query, callback) {
    db.get().collection('docs').find({ category: query.category }).toArray(function (err, docs) {
        callback(err, docs);
    })
};

