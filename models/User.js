// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number },
  urlPhoto: String,
  fullName: String,
  city: String,
  details: String,
  points: { type: Number, default: 0 }
});


module.exports = mongoose.model('User', userSchema);
