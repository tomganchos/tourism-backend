var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// GET

exports.getPublications = function (query, callback) {
    // if ((query.from !== undefined) && (query.to !== undefined) && (query.journal !== undefined)) {
    //     db.get().collection('publications').find({ date: { $gte: query.from, $lte: query.to}, journal: query.journal }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else if ((query.from !== undefined) && (query.to !== undefined) && (query.journal === undefined)) {
    //     db.get().collection('publications').find({ date: { $gte: query.from, $lte: query.to} }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else if ((query.from !== undefined) && (query.to === undefined) && (query.journal !== undefined)) {
    //     db.get().collection('publications').find({ date: { $gte: query.from }, journal: query.journal }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else if ((query.from === undefined) && (query.to !== undefined) && (query.journal !== undefined)) {
    //     db.get().collection('publications').find({ date: { $lte: query.to}, journal: query.journal }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else if ((query.from !== undefined) && (query.to === undefined) && (query.journal === undefined)) {
    //     db.get().collection('publications').find({ date: { $gte: query.from } }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else if ((query.from === undefined) && (query.to === undefined) && (query.journal !== undefined)) {
    //     db.get().collection('publications').find({ journal: query.journal }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else if ((query.from === undefined) && (query.to !== undefined) && (query.journal === undefined)) {
    //     db.get().collection('publications').find({ date: { $lte: query.to} }).sort({ date: -1}).toArray(function (err, docs) {
    //         callback(err, docs);
    //     })
    // } else {
        db.get().collection('publications').find().sort({ date: -1}).toArray(function (err, docs) {
            callback(err, docs);
        })
    // }
};
exports.getPublication = function (id, callback) {
    db.get().collection('publications').find({_id: ObjectID(id)}).toArray(function (err, docs) {
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
    db.get().collection('publications').findOneAndUpdate({_id: ObjectID(id) }, { $set: {name: name, link: link, date: date, journal: journal} }, function (err) {
        callback(err);
    })
};