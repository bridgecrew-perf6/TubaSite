const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
var commentSchema = new Schema({
  rating:  {
      type: Number,
      min: 1,
      max: 5,
      required: true
  },
  comment:  {
      type: String,
      required: true
  },
  author:  {
      type: String,
      required: true
  },
  sentiment: {
    type:  Number,
    required: true
  }
}, {
  timestamps: true
});
const ReviewSchema = new Schema({
  model:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments:[commentSchema]
});
module.exports = User = mongoose.model("reviews", ReviewSchema);