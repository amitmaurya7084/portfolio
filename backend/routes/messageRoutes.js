const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// @route  POST /api/messages   (public - contact form submit)
router.post("/", async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address" });
    }

    await Message.create({ name, email, subject, message });
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
