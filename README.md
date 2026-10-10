# Amit Maurya — MERN Stack Portfolio

Ye tera static HTML/CSS/JS portfolio ab pura **MERN stack** (MongoDB, Express, React, Node.js) me convert ho chuka hai — dynamic, database-driven, aur easily editable via seed script.

## 🎨 Kya naya hai

- **Dynamic data** — Skills, Projects, Certificates, Achievements, Education sab MongoDB se aate hain (koi bhi cheez change karni ho to database me update karo, code touch mat karo)
- **New Logo/Icon** — Blue & white gradient icon (code-bracket monogram), favicon aur navbar dono me
- **Modern UI** — Glassmorphism cards, smooth hover animations, typing effect hero, mobile-responsive navbar
- **Contact form** — ab real backend API pe post hota hai aur MongoDB me save hota hai (mailto ki jagah)
- **Same content, better structure** — tera saara resume data (projects, skills, certificates, education) as-is preserved hai seed script me

## 📁 Project Structure

```
amit-portfolio-mern/
├── backend/           # Express + MongoDB API
│   ├── config/db.js
│   ├── models/        # Mongoose schemas
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── seed/seed.js   # Tera resume data yaha se DB me jayega
│   └── server.js
└── frontend/          # React (Vite) + Tailwind CSS
    ├── public/
    │   ├── assets/     # Project/certificate images
    │   └── favicon.svg # Blue & white icon
    └── src/
        ├── components/
        ├── pages/
        ├── context/
        └── api/
```

## 🚀 Setup & Run (Step by Step)

### 1. MongoDB tayaar karo
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) pe free cluster banao (ya local MongoDB use karo)
- Connection string (URI) copy kar lo

### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

`.env` file open karke ye values apni actual details se replace karo:
```
MONGO_URI=<tera MongoDB connection string>
```

Database seed karo (ye tera resume data DB me daal dega):
```bash
npm run seed
```

Server start karo:
```bash
npm run dev
```
Backend ab `http://localhost:5000` pe chalega.

### 3. Frontend setup

Naye terminal me:
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Frontend ab `http://localhost:5173` pe khulega.

## ✏️ Content kaise change karein

`backend/seed/seed.js` me apna data update karo aur dobara `npm run seed` chalao.

Contact form ke messages MongoDB ke `messages` collection me save hote hain (Atlas me dekh sakte ho).

## 🌐 Deployment (jab ready ho)

- **Backend** → Render / Railway pe deploy karo (Node app), environment variables wahi set karo jo `.env` me hai
- **Frontend** → Vercel pe deploy karo, `VITE_API_URL` ko apne deployed backend URL pe set karo
- CORS ke liye backend ke `.env` me `CLIENT_URL` apne Vercel domain se update karna mat bhoolna

## 🛠 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, React Router, Axios, React Icons
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Security:** Contact form rate limiting
