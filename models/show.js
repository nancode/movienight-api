const mongoose = require('../config/mongoose.js');
const user = require('./user');

const show = mongoose.model('show', {
    title: String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    movies: [{
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        year: String,
        genre: String,
        poster: String
    }]
});

module.exports = show;
