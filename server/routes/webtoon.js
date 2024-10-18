// routes/webtoons.js
const express = require('express');
const router = express.Router();
const { getWebtoons, getWebtoonById, addToFavorites } = require('../controllers/webtoonController');
const auth = require('../middleware/auth');

router.get('/', getWebtoons);
router.get('/:id', getWebtoonById);
router.post('/favorite/:id', auth, addToFavorites);

module.exports = router;

// controllers/webtoonController.js
const Webtoon = require('../models/Webtoon');
const User = require('../models/User');

exports.getWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find().sort({ views: -1 }).limit(10);
    res.json(webtoons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ msg: 'Webtoon not found' });
    }
    res.json(webtoon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ msg: 'Webtoon not found' });
    }
    if (user.favorites.includes(webtoon._id)) {
      return res.status(400).json({ msg: 'Webtoon already in favorites' });
    }
    user.favorites.push(webtoon._id);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};