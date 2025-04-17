const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bookId: { type: String, required: true, unique: true },
  author: String,
  images: [String],
  ratings: { type: Number, default: 0.0, min: 0.0, max: 5.0 },
  totalReviews: { type: Number, default: 0 },
  genre: [String],
  publishedDate: Date,
  pages: Number,
  readTime: String,
  readers: { type: Number, default: 0 },
  description: String,
  likes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
