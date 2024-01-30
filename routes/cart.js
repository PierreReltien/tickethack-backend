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
        isActive: true,
    });

    newCart.save().then(data => {
        res.json({ result: true, Cart: data });
    });
});

router.put("/update/:id", (req, res) => {

    Cart.findOne({ _id: req.params.id }).then((cartFound) => {

        if (!cartFound) {
            return res.json({ result: false, error: "Cart not found" })
        } else {
            Cart.updateOne({ _id: req.params.id }, { isActive: false }).then((cartUpdated) => {
                return res.json({ result: true, cartUpdated })
            })
        }
    })
})















module.exports = router;
