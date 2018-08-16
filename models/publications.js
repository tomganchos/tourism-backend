var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// GET
exports.all = function (callback) {
    db.get().collection('publications').find().sort({ date: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};
exports.journal = function (journal, callback) {
    db.get().collection('publications').find({journal: journal}).sort({ date: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};
exports.date = function (from, to, callback) {
    db.get().collection('publications').find( { date: { $gte: from, $lte: to} }).sort({ date: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};
exports.dateJournal = function (from, to, journal, callback) {
    db.get().collection('publications').find( { date: { $gte: from, $lte: to}, journal: journal } ).sort({ date: -1}).toArray(function (err, docs) {
        callback(err, docs);
    })
};

// POST
exports.addPublication = function (publication, callback) {
    db.get().collection('publications').insertOne(publication, function (err) {
        callback(err);
    })
};

// DELETE
exports.deletePublication = function (id, callback) {
    db.get().collection('publications').deleteOne({_id: ObjectID(id)}, function (err) {
        callback(err);
    })
};

// UPDATE
exports.updatePublication = function (id, name, link, date, journal, callback) {
    db.get().collection('publications').updateOne({_id: ObjectID(id) }, { $set: {name: name, link: link, date: date, journal: journal} }, function (err) {
        callback(err);
    })
};