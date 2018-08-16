var Publications = require('../models/publications');

// GET
exports.all = function (req, res) {
    Publications.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    })
};
exports.journal = function (req, res) {
    Publications.journal(req.params['journal'], function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    })
};
exports.date = function (req, res) {
    Publications.date(req.params['from'], req.params['to'], function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    })
};
exports.dateJournal = function (req, res) {
    Publications.dateJournal(req.params['from'], req.params['to'], req.params['journal'], function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    })
};

// POST
exports.addPublication = function (req, res) {
    var publication = {
        name: req.body.name,
        link: req.body.link,
        date: req.body.date,
        journal: req.body.journal
    };
    Publications.addPublication(publication, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};

// DELETE
exports.deletePublication = function (req, res) {
    Publications.deletePublication(req.body.id, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};

//UPDATE
exports.updatePublication = function (req, res) {
    console.log(req.body);
    Publications.updatePublication(req.body.id, req.body.name, req.body.link, req.body.date, req.body.journal, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};