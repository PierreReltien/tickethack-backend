const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
	price: Number,

});

const Purchase = mongoose.model('purchases', purchaseSchema);

module.exports = Purchase;