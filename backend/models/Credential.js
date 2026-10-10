const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    provider: { type: String, required: true },
    type: { type: String, enum: ["training", "certification"], default: "training" },
    details: { type: String, required: true },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Credential", credentialSchema);
