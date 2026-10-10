const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    shortDesc: { type: String, required: true },
    image: { type: String, default: "" },
    tags: [{ type: String }],
    github: { type: String, default: "" },
    live: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
