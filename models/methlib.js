var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// GET
exports.all = function (callback) {
    db.get().collection('methlib').find().toArray(function (err, docs) {
        callback(err, docs);
    })
};
// POST
exports.addDoc = function (doc, callback) {
    db.get().collection('methlib').insertOne(doc, function (err) {
        callback(err);
    })
};

// DELETE
exports.deleteDoc = function (id, callback) {
    db.get().collection('methlib').deleteOne({_id: ObjectID(id)}, function (err) {
        callback(err);
    })
};

// UPDATE
exports.updateDoc = function (id, name, link, callback) {
    db.get().collection('methlib').updateOne({_id: ObjectID(id) }, { $set: {name: name, link: link} }, function (err) {
        callback(err);
    })
};