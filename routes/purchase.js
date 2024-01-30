var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const Purchase = require('../models/purchases');



router.post('/', (req, res) => {

    const { departure, arrival, date, price } = req.body;

    const newPurchase = new Purchase({
        departure,
        arrival,
        date,
        price,
    });

    newPurchase.save().then(data => {
        res.json({ result: true, Purchase: data });
    });
});




module.exports = router;
