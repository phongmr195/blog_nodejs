const mongoose = require('mongoose');
const { Schema } = mongoose;

const Course = new Schema({
    title: {
        type: String,
        maxlength: 255,
        min: 1,
    },
    description: {
        type: String,
        maxlength: 500,
        min: 1,
    },
    image: String,
    slug: {
        type: String,
        maxlength: 100,
        min: 1,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Course', Course);
