require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const buildResourceRouter = require("./routes/resourceRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const Skill = require("./models/Skill");
const Project = require("./models/Project");
const Credential = require("./models/Credential");
const Achievement = require("./models/Achievement");
const Education = require("./models/Education");
const AchievementNote = require("./models/AchievementNote");

const messageRoutes = require("./routes/messageRoutes");

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "5mb" }));

// Basic rate limiting on the contact form to prevent spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: { message: "Too many requests, please try again later." },
});
app.use("/api/messages", contactLimiter);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Amit Maurya Portfolio API is running" });
});

app.use("/api/messages", messageRoutes);
app.use("/api/skills", buildResourceRouter(Skill));
app.use("/api/projects", buildResourceRouter(Project));
app.use("/api/credentials", buildResourceRouter(Credential));
app.use("/api/achievements", buildResourceRouter(Achievement));
app.use("/api/education", buildResourceRouter(Education));
app.use("/api/achievement-notes", buildResourceRouter(AchievementNote));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
