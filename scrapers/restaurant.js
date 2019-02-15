var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  name : String,
});

module.exports = mongoose.model('restaurant', restaurantSchema);
