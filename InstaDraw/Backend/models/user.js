const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      default: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-0.png',
    },
  },
);

const User = mongoose.model('User', schema);

module.exports = {
  User,
};
