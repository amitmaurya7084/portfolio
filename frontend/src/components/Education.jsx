import useFetch from "../api/useFetch";

const FALLBACK_EDUCATION = [
  { degree: "B. Tech / Information Technology", specialization: "BIET, Lucknow", timeline: "June '17 - June '26", score: "CGPA: 7.7" },
  { degree: "MD Inter College, Varanasi (12th)", specialization: "Intermediate", timeline: "Class of 2022", score: "Percentage: 69.33%" },
  { degree: "MD Inter College, Varanasi (10th)", specialization: "High School", timeline: "Class of 2020", score: "Percentage: 79.66%" },
];

const FALLBACK_NOTES = [
  "Acquired Research Paper Publication Certificate indexed in a Scopus Indexed Journal (2026).",
  "Successfully executed a full corporate MERN stack application and API management pipeline at Analyze Infotech.",
  "Completed algorithmic development and code execution work in industrial Java AI programs at HCL Tech.",
];

export default function Education() {
  const { data: education, loading } = useFetch("/education", FALLBACK_EDUCATION);
  const { data: notes } = useFetch("/achievement-notes", FALLBACK_NOTES.map((text) => ({ text })));

  return (
    <section id="education" className="section-container">
      <h2 className="section-heading">
        Education <span>Matrix</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
        <div className="glass-card cursor-default">
          {loading ? (
            <p className="text-brand-muted">Loading education...</p>
          ) : (
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={edu._id || idx} className="border-l-2 border-brand-primary pl-4">
                  <h3 className="font-semibold text-base sm:text-lg">{edu.degree}</h3>
                  <p className="text-brand-primary text-sm my-1">{edu.specialization}</p>
                  <p className="text-brand-muted text-xs sm:text-sm">
                    Timeline: {edu.timeline} | <strong className="text-brand-text/80">{edu.score}</strong>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Achievements Overview</h3>
          <div className="glass-card cursor-default">
            <ul className="space-y-3 text-brand-muted text-sm leading-relaxed list-disc list-inside">
              {notes.map((note, idx) => (
                <li key={note._id || idx}>{note.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
