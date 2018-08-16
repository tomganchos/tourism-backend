var MethLib = require('../models/methlib');

exports.all = function (req, res) {
    MethLib.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    });
};

// POST
exports.addDoc = function (req, res) {
    var doc = {
        name: req.body.name,
        link: req.body.link
    };
    MethLib.addDoc(doc, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};

// DELETE
exports.deleteDoc = function (req, res) {
    MethLib.deleteDoc(req.body.id, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};

// UPDATE
exports.updateDoc = function (req, res) {
    MethLib.updateDoc(req.body.id, req.body.name, req.body.link, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};