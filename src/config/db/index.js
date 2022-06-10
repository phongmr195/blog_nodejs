const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/phong_db_dev');
        console.log('Connect to DB successfuly!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
