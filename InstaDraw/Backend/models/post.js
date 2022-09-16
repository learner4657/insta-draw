const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    image: {
      type: String,
      default: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-0.png',
    },
    likedBy: [{
      type: mongoose.Types.ObjectId,
    }],
    default: [],
    postedBy: {
      type: mongoose.Types.ObjectId,
    },
    timestamps: {
      createdAt: 'created_at',
    },
  },
);
