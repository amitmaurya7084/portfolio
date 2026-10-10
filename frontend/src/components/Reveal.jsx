import { motion } from "framer-motion";

// Wraps any section/element and fades + slides it up into view once,
// the first time it scrolls into the viewport. Used to give the whole
// portfolio a smooth, modern "reveal on scroll" feel.
export default function Reveal({ children, delay = 0, y = 30, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
