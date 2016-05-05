var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paymentPortal');

var Transaction = require('./app/models/transaction');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8888;

// ROUTES
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('Processing request...');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'This is the API' });
});

router.route('/transactions')
  .post(function(req, res) {
    console.log(req);

    var transaction = new Transaction();
    transaction = Object.assign(transaction, req.body);

    transaction.save(function(err) {
      if(err) {
        res.send(err);
      }

      res.json({ message: 'Transaction created with ID ' + transaction._id });
    });
  })

  .get(function(req, res) {
    Transaction.find(function(err, transactions) {
      if(err) {
        res.send(err);
      }

      res.json(transactions);
    });
  });

router.route('/transactions/:transaction_id')

  .get(function(req, res) {
    Transaction.findById(req.params.transaction_id, function(err, transaction) {
      if(err) {
        res.send(err);
      }

      res.json(transaction);
    });
  })

  .put(function(req, res) {
    Transaction.findById(req.params.transaction_id, function(err, transaction) {
      if(err) {
        res.send(err);
      }

      var transactionFields = Object.assign({}, req.body);
      delete transactionFields._id;
      transaction = Object.assign(transaction, transactionFields);

      transaction.save(function(err) {
        if(err) {
          res.send(err);
        }

        res.json({ message: 'Transaction ' + transaction._id + ' updated successfully.' });
      });
    });
  })

  .delete(function(req, res) {
    Transaction.remove({
      _id: req.params.transaction_id
    }, function(err, transaction) {
      if(err){
        res.send(err);
      }

      res.json({ message: 'Transaction deleted successfully.' });
    });
  });

app.use('/api', router);

// Start the server
app.listen(port);
console.log('Listening on port ' + port);
