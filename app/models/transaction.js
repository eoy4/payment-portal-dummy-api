var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  id: String,
  accountNumber: String,
  entity: String,
  confirmationCode: String,
  date: Date,
  status: String,
  processorResponse: String,
  billingInfo: {
    firstName: String,
    lastName: String,
    country: String,
    streetAddress: String,
    city: String,
    state: String,
    postalCode: String,
    email: String
  },
  cardInfo: {
    cardNumber: String,
    expirationDate: String,
    ammount: Number
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
