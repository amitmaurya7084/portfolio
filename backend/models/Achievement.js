const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDesc: { type: String, required: true },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
    externalLink: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Achievement", achievementSchema);
