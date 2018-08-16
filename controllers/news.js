var News = require('../models/news');

// GET
exports.all = function (req, res) {
    News.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.send(docs);
    })
};
exports.oneNews = function (req, res) {
    News.oneNews(req.params['id'], function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.send(docs);
    })
};

// POST
exports.addNews = function (req, res) {
    console.log(req.body);
    var news = {
        name: req.body.name,
        date: req.body.date,
        text: req.body.text,
        docs: req.body.docs,
        results: req.body.results,
        selection: req.body.selection,
        img: req.body.img
    };
    News.addNews(news, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // res.header('Access-Control-Allow-Origin', '8080');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.sendStatus(200);
    })
};