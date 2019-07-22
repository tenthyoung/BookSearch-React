const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    authors: [String],
    description: String,
    image: String,
    link: String,
    title: String,
  });
  
  // We need to create a new collection called Books based off the BookSchema
  const Book = mongoose.model('Book', BookSchema);

  module.exports = Book;