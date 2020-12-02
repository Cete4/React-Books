const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  link: { type: String, required: true }
});

const Googlebooks = mongoose.model("googlebooks", googlebooks);

module.exports = Googlebooks;
