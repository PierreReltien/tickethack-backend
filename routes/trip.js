var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')

const fetch = require('node-fetch');
const Trip = require('../models/trips');
const moment = require('moment')


router.get('/:departure/:arrival/:date', (req, res) => {

let date = new Date(req.params.date)
console.log(date)

let beginning = moment(date).startOf('day')
let ending = moment(date).endOf('day')

console.log(beginning);
console.log(ending);


	Trip.find({
		departure: {$regex: new RegExp( req.params.departure,"i")}, 
		arrival : {$regex: new RegExp(req.params.arrival,"i")}, 
		date: {$gt : beginning, $lt : ending}})

	.then(data => {
		console.log(data)

		if(data.length>0) {

			res.json({ result: true, trip : data })
		} else {
			res.json({ result: false, error :'No trip availlable' })
	}})
});




module.exports = router;
