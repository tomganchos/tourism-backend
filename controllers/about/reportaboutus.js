var Docs = require('../../models/about/reportaboutus');

//GET
exports.all = function (req, res) {
    Docs.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Origin', 'http://95.213.235.86');
        res.send(docs);
    })
};