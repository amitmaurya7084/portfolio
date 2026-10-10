import { FaCode, FaCertificate, FaGraduationCap, FaLayerGroup } from "react-icons/fa";
import CountUp from "./CountUp";

const STATS = [
  { icon: FaCode, value: 4, suffix: "+", label: "Live Projects" },
  { icon: FaLayerGroup, value: 16, suffix: "+", label: "Core Skills" },
  { icon: FaCertificate, value: 6, suffix: "+", label: "Certifications" },
  { icon: FaGraduationCap, value: 7.7, suffix: "", label: "CGPA" },
];

export default function Stats() {
  return (
    <section className="px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-10">
      <div className="max-w-5xl mx-auto glass-card cursor-default hover:translate-y-0 hover:shadow-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <span className="w-11 h-11 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-lg">
                <Icon />
              </span>
              <span className="text-2xl sm:text-3xl font-display font-bold text-brand-text">
                {Number.isInteger(value) ? <CountUp end={value} suffix={suffix} /> : value}
              </span>
              <span className="text-xs sm:text-sm text-brand-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
