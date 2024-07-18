const mongoose = require('mongoose');

async function connecttoMongoDb(url) {
   return mongoose.connect(url); 
}

module.exports = {
    connecttoMongoDb
}