const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: {
      type: Number,
      default: 0,
    },
    coverImagd: {
      type: String,
      required: true,
      maxlength: 1,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema)


module.exports = Book
