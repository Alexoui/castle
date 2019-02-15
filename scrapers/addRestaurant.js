var Restaurant = require('./restaurant');

module.exports = function(name) {
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Castle', { useNewUrlParser: true });

    var restaurant = new Restaurant({ name : name });

    restaurant.save(function (err) {
      if (err) { throw err; }
      mongoose.connection.close();
    });
}
