const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  socials: [{ _id: false, name: String, click: String }],
});

module.exports = mongoose.model("Card", cardSchema);
