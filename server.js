var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var newsController = require('./controllers/news');
var documentsOfCenterController = require('./controllers/about/documentsofcenter');
var structureController = require('./controllers/about/structure');
var moneyEconActivityController = require('./controllers/about/moneyeconactivity');
var reportAboutUsController = require('./controllers/about/reportaboutus');
var paideduserviesController = require('./controllers/about/paideduservies');
var normativeBaseController = require('./controllers/about/normativebase');
var controlController = require('./controllers/about/control');


var plansController = require('./controllers/plans');

var publicationsController = require('./controllers/publications');
var methlibController = require('./controllers/methlib');
var tripController = require('./controllers/tripactivity');

var db = require('./db');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function (req, res) {
    res.send('kek');
});

app.get('/news', newsController.all);
app.get('/news/:id', newsController.oneNews);
app.post('/news', newsController.addNews);

app.get('/documentsofcenter', documentsOfCenterController.all);
app.get('/structure', structureController.all);
app.get('/moneyeconactivity', moneyEconActivityController.all);
app.get('/reportaboutus', reportAboutUsController.all);
app.get('/paideduservies', paideduserviesController.all);
app.get('/normativebase', normativeBaseController.all);
app.get('/control', controlController.all);

app.get('/methlib', methlibController.all);
app.post('/methlib', methlibController.addDoc);
app.delete('/methlib', methlibController.deleteDoc);
app.put('/methlib', methlibController.updateDoc);



app.get('/plans', plansController.getPlans);
app.post('/plans', plansController.addPlan);
app.put('/plans', plansController.updatePlan);
app.delete('/plans', plansController.deletePlan);

app.get('/publications', publicationsController.getPublications);
app.get('/publications/:id', publicationsController.getPublication);
// app.get('/publications', publicationsController.all);
// app.get('/publications/:journal', publicationsController.journal);
// app.get('/publications/:from/:to', publicationsController.date);
// app.get('/publications/:from/:to/:journal', publicationsController.dateJournal);
app.post('/publications', publicationsController.addPublication);
app.delete('/publications', publicationsController.deletePublication);
app.put('/publications', publicationsController.updatePublication);

app.get('/trips', tripController.all);

db.connect('mongodb://localhost:27017/tourismdb', function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(3012, function() {
        console.log('Backend started');
    });
});
