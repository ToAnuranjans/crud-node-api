
const mongoose = require('mongoose');
const config = require('config');



function getConnectionString() {
    const userName = config.get('MongoDb.userName');
    const password = config.get('MongoDb.password');

    console.log({ userName, password });
    return uri;
}

function connectDb() {


    return mongoose.connect(getConnectionString())
        .then(() => console.log('Connected!'))
}

module.exports = connectDb;
