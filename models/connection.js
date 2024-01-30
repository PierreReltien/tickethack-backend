const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://la-capsule:yisdf1HUmykN40CX@cluster0.bfcvn.mongodb.net/weatherapp?retryWrites=true&w=majority';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
