import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full
                  bg-gradient-to-r from-brand-primary to-brand-primaryDark text-white shadow-glow
                  flex items-center justify-center transition-all duration-300
                  hover:scale-110 active:scale-95
                  ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <FaArrowUp />
    </button>
  );
}
