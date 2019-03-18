//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://cafe-user:Cafe2100@ds251002.mlab.com:51002/cafe';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;