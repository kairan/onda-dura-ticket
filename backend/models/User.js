const mongoose = require('../mongo/connection');

const userSchema = new mongoose.Schema({
  name: String,
  mail: String,
  role: String,
  watchedVideo1: Boolean,
  watchedVideo2: Boolean,
  watchedVideo3: Boolean,
  watchedVideo4: Boolean
});

const User = mongoose.model('user', userSchema);

module.exports = User;