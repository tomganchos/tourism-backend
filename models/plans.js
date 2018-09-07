var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// GET
exports.getPlans = function (callback) {
    db.get().collection('plans').find().toArray(function (err, docs) {
        callback(err, docs);
    })
};

// POST
exports.addPlan = function (plan, callback) {
    db.get().collection('plans').insertOne(plan, function (err) {
        callback(err);
    })
};

// DELETE
exports.deletePlan = function (id, callback) {
    db.get().collection('plans').deleteOne({_id: ObjectID(id)}, function (err) {
        callback(err);
    })
};

// UPDATE
exports.updatePlan = function (id, name, date, month, doc, callback) {
    db.get().collection('plans').findOneAndUpdate({id: ObjectID(id) }, { $set: {name: name, date: date, month: month, doc: doc} }, function (err) {
        callback(err);
    })
};