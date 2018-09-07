var Plans = require('../models/plans');

// GET
exports.getPlans = function(req, res) {
    Plans.getPlans(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.send(docs);
    })
};

// POST
exports.addPlan = function (req, res) {
    var plan = {
        // id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        month: req.body.month,
        doc: req.body.doc
    };
    Plans.addPlan(plan, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

// DELETE
exports.deletePlan = function (req, res) {
    Plans.deletePlan(req.query.id, function (err) {
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
exports.updatePlan = function (req, res) {
    Plans.updatePlan(req.body.id, req.body.name, req.body.date, req.body.month, req.body.doc, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.sendStatus(200);
    })
};