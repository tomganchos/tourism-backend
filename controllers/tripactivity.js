var TripActivity = require('../models/tripactivity');

exports.all = function (req, res) {
   TripActivity.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    });
};