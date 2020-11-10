const mongoose = require('mongoose');
if (process.env.NODE_ENV === 'DEV') {
  mongoose.connect('mongodb://localhost:27017/onda-dura-ticket', {useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false });
} else {
  mongoose.connect('mongodb://ondadura-familiarizando-db:27017/onda-dura-ticket', {useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongo server')
});

module.exports = mongoose;