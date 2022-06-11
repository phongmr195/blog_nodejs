const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

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
        slug: 'title',
        unique: true,
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
