
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievement" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      setScrolled(window.scrollY > 20);

      const sections = LINKS.map(({ href }) =>
        document.getElementById(href.slice(1))
      ).filter(Boolean);

      let current = "#home";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 150) {
          current = `#${section.id}`;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) current = `#${lastSection.id}`;
      }

      setActive(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateNavbar);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateNavbar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleNavigation = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-brand-border bg-brand-bg/90 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-brand-bg/50 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4"
      >
        <a
          href="#home"
          aria-label="Amit Maurya Home"
          onClick={() => handleNavigation("#home")}
        >
          <Logo size={34} />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-4 lg:gap-6 md:flex">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href ? "location" : undefined}
                onClick={() => handleNavigation(href)}
                className={`relative whitespace-nowrap py-2 text-xs font-medium transition-colors lg:text-sm ${
                  active === href
                    ? "text-brand-primary"
                    : "text-brand-muted hover:text-brand-primary"
                }`}
              >
                {label}
                {active === href && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-primary" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border text-xl text-brand-text transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary md:hidden"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop contact button */}
        <a
          href="#contact"
          onClick={() => handleNavigation("#contact")}
          className="hidden rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Let's Talk →
        </a>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brand-border bg-brand-surface px-5 py-4 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={active === href ? "location" : undefined}
                  onClick={() => handleNavigation(href)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active === href
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-brand-muted hover:bg-brand-primary/5 hover:text-brand-primary"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={() => handleNavigation("#contact")}
                className="block rounded-lg bg-brand-primary px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Let's Talk →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
