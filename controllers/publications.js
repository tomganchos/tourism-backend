var Publications = require('../models/publications');

// GET
exports.getPublications = function(req, res) {
    Publications.getPublications(req.query, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.send(docs);
    })
};
exports.getPublication = function(req, res) {
    Publications.getPublication(req.params['id'], function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
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
        // id: req.body.id
    };
    Publications.addPublication(publication, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.sendStatus(200);
    })
};

// DELETE
exports.deletePublication = function (req, res) {
    Publications.deletePublication(req.query.id, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.sendStatus(200);
    })
};

//UPDATE
exports.updatePublication = function (req, res) {
    Publications.updatePublication(req.body.id, req.body.name, req.body.link, req.body.date, req.body.journal, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.sendStatus(200);
    })
};