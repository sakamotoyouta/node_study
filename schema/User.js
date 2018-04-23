const mongoose = require('mongoose');

const User = mongoose.Schema({
  username: String,
  password: String,
  date: { type: Date, default: new Date() },
  avatar_path: String,
});

module.exports = mongoose.model('User', User);
