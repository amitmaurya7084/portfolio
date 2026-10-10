require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Credential = require("../models/Credential");
const Achievement = require("../models/Achievement");
const Education = require("../models/Education");
const AchievementNote = require("../models/AchievementNote");

const skills = [
  "MongoDB", "Express.js", "React.js", "Node.js",
  "JavaScript", "HTML5", "CSS3", "Git & GitHub",
].map((name, i) => ({ name, order: i }));

const projects = [
  {
    title: "AI-Powered Resume & Interview Assistant (Final Year Project)",
    shortDesc:
      "Built a MERN-based ATS-friendly resume builder with React, AI-powered resume suggestions, interview evaluation, mock interviews, PDF generation, and MongoDB integration.",
    image: "resume.png",
    tags: ["MERN Stack", "React.js", "AI Integration", "MongoDB"],
    github: "https://github.com/amitmaurya7084/AiResumeInterviewAss",
    live: "https://ai-resume-interview-ass.vercel.app",
    featured: true,
    order: 0,
  },
  {
    title: "Code Vantage",
    shortDesc:
      "Full-stack MERN web application built with React.js, Node.js, Express.js and MongoDB, deployed live on Render.",
    image: "codeVantage.png",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/amitmaurya7084/CodeVantage",
    live: "https://codevantages-6z3g.onrender.com",
    featured: true,
    order: 1,
  },
  {
    title: "Hotel Booking System (Training Project)",
    shortDesc:
      "Developed a MERN-based Hotel Booking System with hotel search, room availability, online booking, JWT authentication, and booking management using MongoDB.",
    image: "hotel_booking.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    github: "https://github.com/amitmaurya7084/Hotel_Boooking",
    live: "",
    order: 2,
  },
  {
    title: "Food Delivery Platform",
    shortDesc:
      "Built a MERN-based Food Delivery platform with JWT authentication, food browsing, cart management, online ordering, Stripe payments, and an admin panel using MongoDB.",
    image: "food_delivery.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Admin Panel"],
    github: "https://github.com/amitmaurya7084/food_delivery",
    live: "",
    order: 3,
  },
];

const credentials = [
  {
    title: "MERN Stack Training",
    provider: "Analyze Infotech (Oct 2025)",
    type: "training",
    details:
      "Building responsive and scalable web applications with MERN and focus on RESTful API integration and database management.",
    image: "analyseInfo.jpeg",
    link: "assets/analyseInfo.jpeg",
    order: 0,
  },
  {
    title: "Java Development with AI - Trainee",
    provider: "HCL Tech (Mar 2025)",
    type: "training",
    details:
      "The learning objective of this program is to develop applications by writing, debugging and executing code, specializing in the Java Suite.",
    image: "HCL_CERTI.jpg",
    link: "assets/HCL_CERTI.jpg",
    order: 1,
  },
  {
    title: "Frontend Development Training",
    provider: "Digital Navik",
    type: "certification",
    details:
      "Validated expertise across responsive layout builds, semantic web markup, and modern UI development practices.",
    image: "HCL_CERTI.jpg",
    link: "assets/HCL_CERTI.jpg",
    order: 2,
  },
];

const education = [
  {
    degree: "B. Tech / Information Technology",
    specialization: "BIET, Lucknow",
    timeline: "June '17 - June '26",
    score: "CGPA: 7.7",
    order: 0,
  },
  {
    degree: "MD Inter College, Varanasi (12th)",
    specialization: "Intermediate",
    timeline: "Class of 2022",
    score: "Percentage: 69.33%",
    order: 1,
  },
  {
    degree: "MD Inter College, Varanasi (10th)",
    specialization: "High School",
    timeline: "Class of 2020",
    score: "Percentage: 79.66%",
    order: 2,
  },
];

const achievementNotes = [
  "Acquired Research Paper Publication Certificate indexed in a Scopus Indexed Journal (2026).",
  "Successfully executed a full corporate MERN stack application and API management pipeline at Analyze Infotech.",
  "Completed algorithmic development and code execution work in industrial Java AI programs at HCL Tech.",
].map((text, i) => ({ text, order: i }));

const achievements = [
  {
    title: "JavaScript Certification",
    shortDesc:
      "Completed a beginner-level JavaScript certification from Simplilearn, gaining a strong foundation in JavaScript programming and web development concepts, covering variables, data types, operators, loops, functions, arrays, objects, and DOM manipulation.",
    image: "JS_simplilearn.jpg",
    link: "https://ai-resume-interview-ass.vercel.app/",
    order: 0,
  },
  {
    title: "Research Paper: AI-Powered Resume & Interview Assistant",
    shortDesc:
      "Published a research paper on AI-Powered Resume & Interview Assistant in a Scopus-indexed journal, exploring AI-driven resume suggestions, ATS-friendly resume generation, mock interviews, and automated interview evaluation.",
    image: "research.jpg",
    link: "https://ai-resume-interview-ass.vercel.app/",
    externalLink: "https://publisherjee.com/volume-11-issue-4-2026/",
    order: 1,
  },
  {
    title: "AI-Powered Resume & Interview Assistant (Final Year Project)",
    shortDesc:
      "Built a MERN-based ATS-friendly resume builder with React, AI-powered resume suggestions, interview evaluation, mock interviews, PDF generation, and MongoDB integration.",
    image: "resume.png",
    link: "https://ai-resume-interview-ass.vercel.app/",
    order: 2,
  },
];

const seedData = async () => {
  try {
    await connectDB();

    await Promise.all([
      Skill.deleteMany(),
      Project.deleteMany(),
      Credential.deleteMany(),
      Achievement.deleteMany(),
      Education.deleteMany(),
      AchievementNote.deleteMany(),
    ]);

    await Skill.insertMany(skills);
    await Project.insertMany(projects);
    await Credential.insertMany(credentials);
    await Achievement.insertMany(achievements);
    await Education.insertMany(education);
    await AchievementNote.insertMany(achievementNotes);

    console.log("Seed data inserted successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
