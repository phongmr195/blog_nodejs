const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
