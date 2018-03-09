const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movienight');

module.exports = mongoose;
