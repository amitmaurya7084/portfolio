import {
  SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiMysql, SiPostman, SiRender, SiVercel, SiFirebase,
  SiRedux, SiVite, SiSocketdotio, SiWordpress, SiApachetomcat, SiGit, SiGithub,
  SiJsonwebtokens, SiNodemon, SiReactrouter, SiReacthookform, SiFastapi,
  SiCloudinary, SiEclipseide,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaDatabase, FaPalette } from "react-icons/fa";
import { TbApi, TbBrandOpenai } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import useFetch from "../api/useFetch";

// Maps a skill name (as stored in the DB / fallback list) to its icon.
// All icons share the same purple accent color to match the reference design.
// A skill with no entry here still renders — it just shows its first letter.
const ICON_MAP = {
  // Languages
  JavaScript: SiJavascript,
  Java: FaJava,
  HTML5: SiHtml5,
  CSS3: SiCss,
  SQL: FaDatabase,

  // Frontend
  "React.js": FaReact,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  WordPress: SiWordpress,

  // Backend
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "REST APIs": TbApi,

  // Databases
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Firebase: SiFirebase,

  // Tools & deployment
  "Git & GitHub": FaGitAlt,
  "VS Code": VscVscode,
  Eclipse: SiEclipseide,

  // Common spelling variants, so DB entries still get their icon
  React: FaReact,
  "Node.JS": FaNodeJs,
  Express: SiExpress,
  TailwindCSS: SiTailwindcss,
  
  "Rest API": TbApi,
  CSS: SiCss,
};

const FALLBACK_SKILLS = [
  "JavaScript","Java","HTML5","CSS3","React.js","Node.js",
  "Express.js","Tailwind CSS","Bootstrap","WordPress",
  "REST APIs","MongoDB", "MySQL","Firebase","Eclipse", "Git & GitHub"
].map((name) => ({ name }));

export default function Skills() {
  const { data: skills, loading } = useFetch("/skills", FALLBACK_SKILLS);

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Skills</h2>
        <span className="block w-14 h-1 bg-violet-500 rounded-full mx-auto mt-3" />
      </div>

      {loading ? (
        <p className="text-center text-brand-muted">Loading skills...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
          {skills.map((skill) => {
            const Icon = ICON_MAP[skill.name];
            return (
              <div
                key={skill._id || skill.name}
                className="flex flex-col items-center justify-center gap-3 rounded-xl bg-brand-surface border border-brand-border py-6 px-3
                           transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 text-2xl">
                  {Icon ? <Icon /> : skill.name.charAt(0)}
                </span>
                <span className="text-sm font-medium text-brand-text/90 text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
