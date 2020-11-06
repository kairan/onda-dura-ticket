const mongoose = require('../mongo/connection');

const userSchema = new mongoose.Schema({
  name: String,
  mail: String,
  role: String,
  hasInvite: Boolean
});

const User = mongoose.model('user', userSchema);

module.exports = User;