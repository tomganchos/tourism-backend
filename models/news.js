var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

//GET
exports.all = function (callback) {
    db.get().collection('news').find().sort({date: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};
exports.oneNews = function (id, callback) {
    db.get().collection('news').find({_id: ObjectID(id)}).sort({date: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};

//POST
exports.addNews = function (news, callback) {
    db.get().collection('news').insertOne(news, function (err) {
        callback(err);
    })
};

// DELETE
exports.deleteNews = function (id, callback) {
    db.get().collection('news').deleteOne({_id: ObjectID(id)}, function (err) {
        callback(err);
    })
};

// UPDATE
// TODO: Update