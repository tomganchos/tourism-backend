var Docs = require('../models/docs');

// GET
exports.getDocs = function (req, res) {
  Docs.getDocs(req.query, function (err, docs) {
      if (err) {
          console.log(err);
          return res.sendStatus(500);
      }
      res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.send(docs);
  })
};