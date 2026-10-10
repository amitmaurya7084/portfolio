import { useState } from "react";
import useFetch from "../api/useFetch";

const FALLBACK_CREDENTIALS = [
  {
    title: "MERN Stack Training",
    provider: "Analyze Infotech (Oct 2025)",
    type: "training",
    details: "Building responsive and scalable web applications with MERN and focus on RESTful API integration and database management.",
    image: "analyseInfo.jpeg",
    link: "assets/analyseInfo.jpeg",
  },
  {
    title: "Java Development with AI - Trainee",
    provider: "HCL Tech (Mar 2025)",
    type: "training",
    details: "Developing applications by writing, debugging and executing code, specializing in the Java Suite.",
    image: "HCL_CERTI.jpg",
    link: "assets/HCL_CERTI.jpg",
  },
  {
    title: "Frontend Development Training",
    provider: "Digital Navik",
    type: "traning",
    details: "Validated expertise across responsive layout builds, semantic web markup, and modern UI development practices.",
    image: "diginavikCerti.png",
    link: "assets/diginavikCerti.png",
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "training", label: "Trainings" },
  { key: "certification", label: "Certifications" },
];

export default function Experience() {
  const { data: credentials, loading } = useFetch("/credentials", FALLBACK_CREDENTIALS);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? credentials : credentials.filter((c) => c.type === filter);

  return (
    <section id="experience" className="section-container">
      <h2 className="section-heading">
        Trainings & <span>Certificates</span>
      </h2>

      <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap px-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
              filter === tab.key
                ? "bg-brand-primary text-brand-bg border-brand-primary"
                : "border-brand-border text-brand-muted hover:border-brand-primary hover:text-brand-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-brand-muted">Loading credentials...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((cred, idx) => (
            <div key={cred._id || idx} className="glass-card cursor-default">
              <span className="tag-pill mb-3 inline-block capitalize">{cred.type}</span>
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={`/assets/${cred.image}`}
                  alt={cred.title}
                  className="h-40 sm:h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{cred.title}</h3>
              <p className="text-brand-muted text-xs mb-2">
                <strong className="text-brand-text/80">Entity:</strong> {cred.provider}
              </p>
              <p className="text-brand-muted text-sm mb-4">{cred.details}</p>
              <a
                href={`/${cred.link}`}
                target="_blank"
                rel="noreferrer"
                className="text-brand-primary text-sm font-medium hover:underline"
              >
                Download Certificate &rarr;
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
