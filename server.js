var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var publications = [
    {
        id: 1,
        name: 'КВН-викторина 2014',
        link: 'http://pln-pskov.ru/society/162421.html',
        date: '2014-03-03T00:00:00',
        journal: 'ПЛН'
    },
    {
        id: 2,
        name: 'КВН-викторина 2014',
        link: 'http://www.province.ru/pskov/news/item/891',
        date: '2014-03-11T00:00:00',
        journal: 'Псковская провинция'
    },
    {
        id: 3,
        name: 'Псковская земля',
        link: 'http://www.gtrkpskov.ru/news-feed/news/6188-darya-zueva-iz-nevelskoj-shkoly-1-stala-pobeditelem-konkursa-kraevedcheskikh-rabot-v-pskove.html',
        date: '2014-03-27T00:00:00',
        journal: 'ГТРК'
    }
];



app.get('/', function (req, res) {
    res.send('kek');
});

app.get('/publications', function (req, res) {
    // res.send(publications);
    db.collection('publications').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.post('/publications', function (req, res) {

    console.log(req.body);
    var publication = {
        name: req.body.name,
        link: req.body.link,
        date: req.body.date,
        journal: req.body.journal
    };

    db.collection('publications').insertOne(publication, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.send(publication);
    })
    // res.send(publication);
});
// app.put('/publications/:id')

// app.listen(3012, function() {
//     console.log('Backend started');
// });

MongoClient.connect('mongodb://localhost:27017/tourism', function (err, database) {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(3012, function() {
        console.log('Backend started');
    });
});
