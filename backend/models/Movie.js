const mongoose = require("mongoose")

module.exports = mongoose.model("Movie", {
  title: String,
  description: String,
  videoUrl: String,
  thumbnail: String,
  createdAt: { type: Date, default: Date.now }
})
