var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')

const fetch = require('node-fetch');
const Trip = require('../models/trips');


router.get('/:departure/:arrival/:date', (req, res) => {
	
	if(!req.params.departure || !req.params.arrival || !req.params.date) 
	{
	return res.json({ result: false, error: 'Something is missing'}) 
	}

	Trip.find({
		"departure": req.params.departure, 
		"arrival" : req.params.arrival, 
		"date": req.params.date})
	.then(data => {

		if(data.length>0) {
			res.json({ result: true, trip : data })
		} else {
			res.json({ result: false, error :'No trip availlable' })
	}})
});




module.exports = router;
