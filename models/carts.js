const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
	price: Number,
    isActive: Boolean,
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;