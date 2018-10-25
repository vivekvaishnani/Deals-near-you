const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  deal: { type: String, required: true },
  position:{
    lat: Number,
    lng: Number
  },
  date: { type: Date, default: Date.now }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
