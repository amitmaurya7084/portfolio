import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CountUp({ end, duration = 1.6, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </motion.span>
  );
}
