const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  useremail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: String,
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  libraryBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
