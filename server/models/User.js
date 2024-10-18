// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Webtoon' }]
});

module.exports = mongoose.model('User', UserSchema);

// models/Webtoon.js
const mongoose = require('mongoose');

const WebtoonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  views: { type: Number, default: 0 }
});

module.exports = mongoose.model('Webtoon', WebtoonSchema);