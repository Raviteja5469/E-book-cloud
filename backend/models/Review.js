const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 0.0, max: 5.0 },
  date: { type: Date, default: Date.now },
  review: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Review', reviewSchema);
