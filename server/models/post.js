const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  userId: { type: Number, index: true },
  id: Number,
  title: { type: String, index: true },
  IMDBNumber: { type: String, index: true },
  movieTitle: String,
  year: Number,
  poster: String,
  body: String
});

postsSchema.index({ userId: 1, title: 1 });

module.exports = mongoose.model('Post', postsSchema, 'Posts');


