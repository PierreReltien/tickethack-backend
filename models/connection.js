const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:Legrandleon1@cluster0.7jr79gw.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
