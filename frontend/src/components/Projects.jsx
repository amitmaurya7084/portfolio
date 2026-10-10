import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useFetch from "../api/useFetch";
import Modal from "./Modal";

// Images are bundled from src/assets (so they always load, even if the file is
// missing from public/assets). Falls back to /assets/<name> for DB-provided names.
const localImages = import.meta.glob("../assets/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});
const getImage = (name) => localImages[`../assets/${name}`] || `/assets/${name}`;

const FALLBACK_PROJECTS = [
  {
    title: "AI-Powered Resume & Interview Assistant (Final Year Project)",
    shortDesc:
      "Built a MERN-based ATS-friendly resume builder with React, AI-powered resume suggestions, interview evaluation, mock interviews, PDF generation, and MongoDB integration.",
    image: "resume.png",
    tags: ["MERN Stack", "React.js", "AI Integration", "MongoDB"],
    github: "https://github.com/amitmaurya7084/AiResumeInterviewAss",
    live: "https://ai-resume-interview-ass.vercel.app",
    featured: true,
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
  },
  {
    title: "Hotel Booking System (Training Project)",
    shortDesc:
      "Developed a MERN-based Hotel Booking System with hotel search, room availability, online booking, JWT authentication, and booking management using MongoDB.",
    image: "hotel_booking.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    github: "https://github.com/amitmaurya7084/Hotel_Boooking",
  },
  {
    title: "Food Delivery Platform",
    shortDesc:
      "Built a MERN-based Food Delivery platform with JWT authentication, food browsing, cart management, online ordering, Stripe payments, and an admin panel using MongoDB.",
    image: "food_delivery.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Admin Panel"],
    github: "https://github.com/amitmaurya7084/food_delivery",
  },
];

export default function Projects() {
  const { data: projects, loading } = useFetch("/projects", FALLBACK_PROJECTS);
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">
        Academic <span>Projects</span>
      </h2>

      {loading ? (
        <p className="text-center text-brand-muted">Loading projects...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj._id || idx}
              role="button"
              tabIndex={0}
              className="glass-card cursor-pointer flex flex-col relative"
              onClick={() => setActive(proj)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(proj);
                }
              }}
            >
              {proj.featured && (
                <span className="absolute top-3 right-3 z-10 text-[10px] font-bold tracking-wide uppercase bg-brand-primary text-white px-2.5 py-1 rounded-full shadow-glow">
                  Featured
                </span>
              )}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={getImage(proj.image)}
                  alt={proj.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getImage("resume.png");
                  }}
                  className="h-40 sm:h-44 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">{proj.title}</h3>
              <p className="text-brand-muted text-sm mb-4 flex-1">{proj.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags?.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-secondary !px-4 !py-2 text-xs flex-1 sm:flex-none"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-primary !px-4 !py-2 text-xs flex-1 sm:flex-none"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
        description={active?.shortDesc}
        extra={
          active && (
            <div className="flex flex-wrap gap-2">
              {active.tags?.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          )
        }
      />
    </section>
  );
}
