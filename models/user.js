const mongoose = require('../config/mongoose.js');

const user = mongoose.model('user', {
    email: String,
    first_name: String,
    last_name: String
});

module.exports = user;
