import useFetch from "../api/useFetch";

const FALLBACK_ACHIEVEMENTS = [
  {
    title: "JavaScript Certification",
    shortDesc:
      "Completed a beginner-level JavaScript certification from Simplilearn, covering variables, data types, loops, functions, arrays, objects, and DOM manipulation.",
    image: "JS_simplilearn.jpg",
    link: "assets/JS_simplilearn.jpg",
  },
  {
    title: "Research Paper: AI-Powered Resume & Interview Assistant",
    shortDesc:
      "Published a research paper in a Scopus-indexed journal exploring AI-driven resume suggestions, ATS-friendly resume generation, and automated interview evaluation.",
    image: "research.jpg",
    link: "assets/research.jpg",
  },
  {
    title: "AI-Powered Resume & Interview Assistant (Final Year Project)",
    shortDesc:
      "Built a MERN-based ATS-friendly resume builder with React, AI-powered resume suggestions, interview evaluation, and PDF generation.",
    image: "vollyball.png",
    link: "assets/vollyball.png",
  },
];

export default function Achievements() {
  const { data: achievements, loading } = useFetch("/achievements", FALLBACK_ACHIEVEMENTS);

  return (
    <section id="achievement" className="section-container">
      <h2 className="section-heading">
        <span>Achievements</span>
      </h2>

      {loading ? (
        <p className="text-center text-brand-muted">Loading achievements...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((ach, idx) => (
            <div key={ach._id || idx} className="glass-card flex flex-col">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={`/assets/${ach.image}`}
                  alt={ach.title}
                  className="h-44 sm:h-52 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{ach.title}</h3>
              <p className="text-brand-muted text-sm mb-4 flex-1">{ach.shortDesc}</p>
              <a href={ach.link} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-xs self-start">
                View Credential
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
