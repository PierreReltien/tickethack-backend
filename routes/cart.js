var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const Cart = require('../models/carts');



router.post('/', (req, res) => {

    const { departure, arrival, date, price } = req.body;

    const newCart = new Cart({
        departure,
        arrival,
        date,
        price,
        isActive: false,
    });

    newCart.save().then(data => {
        res.json({ result: true, Cart: data });
    });
});













module.exports = router;
