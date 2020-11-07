const mongoose = require('../mongo/connection');

const videoSchema = new mongoose.Schema({
  name: String,
  url: String,
  order: Number
});

const User = mongoose.model('video', videoSchema);

module.exports = User;