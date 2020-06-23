const mongoose = require('../mongoDB/mongo_db')
const locationSchema = new mongoose.Schema({
  name: String,	
  coords: [Number]
});

const Location = mongoose.model('location', locationSchema);

module.exports = Location
