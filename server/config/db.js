const mongoose = require('mongoose');

const db_url = 'mongodb://localhost:8001/ola-queuing-system';

mongoose.connect(db_url, { useMongoClient: true }, function (err, conn) {
    if (err) {
        console.log('Error while connecting to Mongoose : ' + err);
    }
});