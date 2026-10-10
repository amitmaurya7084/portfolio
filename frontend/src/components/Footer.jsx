
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaHeart,
  FaBriefcase,
} from "react-icons/fa";

import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/amitmaurya7084",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amit-maurya-96560829b",
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/",
      icon: FaTwitter,
    },
    {
      name: "Email",
      href: "mailto:amitmaurya49135@gmail.com",
      icon: FaEnvelope,
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  const exploreLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievement" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const linkClass =
    "inline-block transition-all duration-300 hover:text-brand-primary hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm";

  return (
    <footer
      id="footer"
      className="relative mt-16 overflow-hidden border-t border-brand-border bg-brand-surface/40"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-brand-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand section */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-2">
            <Logo size={36} />

            <p className="mt-4 max-w-md text-sm leading-7 text-brand-muted">
              I'm Amit Maurya, a MERN Stack Developer passionate about
              building modern, responsive, accessible and user-friendly
              web applications with clean and maintainable code.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-3 py-2 text-xs font-medium text-brand-text">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Open to Opportunities
            </div>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  title={name}
                  target={
                    href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-brand-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick navigation">
            <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-brand-text">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-sm text-brand-muted">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Explore */}
          <nav aria-label="More portfolio sections">
            <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-brand-text">
              EXPLORE
            </h3>

            <ul className="space-y-3 text-sm text-brand-muted">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand-border bg-brand-surface/70 p-5 text-center sm:flex-row sm:p-6 sm:text-left">
          <div>
            <h3 className="text-base font-semibold text-brand-text">
              Let's build something great together.
            </h3>

            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Have a project, collaboration idea, or job opportunity?
              I'd love to hear from you.
            </p>
          </div>

          <a
            href="mailto:amitmaurya49135@gmail.com?subject=Portfolio%20Inquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            <FaEnvelope size={14} aria-hidden="true" />
            Get in Touch
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-brand-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-xs leading-6 text-brand-muted">
            © {year}{" "}
            <span className="font-semibold text-brand-text">
              Amit Maurya
            </span>
            . All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-brand-muted">
            <FaCode size={12} aria-hidden="true" />
            Built with MERN Stack and
            <FaHeart
              size={11}
              className="mx-0.5 text-red-500"
              aria-hidden="true"
            />
            passion
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            <FaArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
