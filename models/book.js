const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  img: { type: String, required: true },
  link: { type: String, required: true }
});

const googlebooks = mongoose.model("googlebooks", googlebooks);

module.exports = googlebooks;
