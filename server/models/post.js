const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  userId: { type: Number, index: true },
  id: Number,
  title: String,
  IMDBNumber: { type: String, index: true },
  postTitle: String,
  year: Number,
  poster: String,
  body: String
});

postsSchema.index({ userId: 1});

module.exports = mongoose.model('Post', postsSchema, 'Posts');


