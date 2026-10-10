const mongoose = require("mongoose");

const achievementNoteSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AchievementNote", achievementNoteSchema);
