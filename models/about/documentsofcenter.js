var db = require('../../db');
var ObjectID = require('mongodb').ObjectID;

// GET
exports.all = function (callback) {
    db.get().collection('documentsofcenter').find().toArray(function (err, docs) {
        callback(err, docs);
    })
};

// exports.addDoc = function (doc, callback) {
//     db.get().collection('documentsofcenter').insertOne(doc, function (err) {
//         callback(err);
//     })
// };
