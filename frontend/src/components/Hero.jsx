
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaChevronDown,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import amitPhoto from "../assets/amit.png";

const STRINGS = [
  "JavaScript.",
  "React.js Interfaces.",
  "Node.js Applications.",
  "Express.js APIs.",
  "MongoDB Solutions.",
];

const SOCIALS = [
  {
    icon: FaGithub,
    href: "https://github.com/amitmaurya7084",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/amit-maurya-96560829b",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/",
    label: "Twitter",
  },
  {
    icon: FaEnvelope,
    href: "mailto:amitmaurya49135@gmail.com",
    label: "Email",
  },
];

const TECH_STACK = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
];

function useTypingEffect(
  strings,
  typeSpeed = 75,
  deleteSpeed = 35,
  pause = 1600
) {
  const [text, setText] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setStrIdx((index) => (index + 1) % strings.length);
    } else {
      timeout = setTimeout(() => {
        setText((previous) =>
          deleting
            ? previous.slice(0, -1)
            : current.slice(0, previous.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, strIdx, strings, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(STRINGS);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:pt-36"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-glow"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-32 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-72 w-72 rounded-full bg-brand-accent/15 blur-3xl sm:h-96 sm:w-96"
      />

      {/* Main content */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

        {/* Left content */}
        <div className="order-2 min-w-0 text-center md:order-1 md:text-left">

          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-brand-primary sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
            </span>

            Open to Opportunities
          </div>

          <p className="mb-2 text-base text-brand-muted sm:text-lg">
            Hello, I'm
          </p>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="mb-4 break-words font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-text sm:text-5xl md:text-5xl lg:text-6xl"
          >
            Amit{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Maurya
            </span>
          </h1>

          {/* Professional role */}
          <h2 className="mb-5 flex flex-wrap items-center justify-center gap-2 text-lg font-bold text-brand-primary sm:text-xl md:justify-start md:text-2xl">
            <FaCode
              size={19}
              className="shrink-0"
              aria-hidden="true"
            />
            MERN Stack Developer
          </h2>

          {/* Introduction */}
          <p className="mx-auto mb-5 max-w-xl text-sm leading-7 text-brand-muted sm:text-base md:mx-0">
            I build responsive, user-friendly web applications using
            MongoDB, Express.js, React.js and Node.js. I enjoy solving
            real-world problems and turning ideas into practical digital
            experiences.
          </p>

          {/* Typing animation */}
          <div
            className="mb-8 min-h-14 text-sm leading-7 text-brand-muted sm:text-base"
            aria-label="Exploring JavaScript, React.js, Node.js, Express.js and MongoDB"
          >
            <span>Currently exploring </span>

            <span
              aria-hidden="true"
              className="font-semibold text-brand-primary"
            >
              {typed}
              <span className="ml-0.5 animate-pulse motion-reduce:animate-none">
                |
              </span>
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <a
              href="#projects"
              className="btn-primary inline-flex w-full items-center justify-center gap-3 text-sm sm:w-auto sm:text-base"
            >
              View My Projects
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="/Amit_resume.pdf"
              download="Amit_Maurya_Resume.pdf"
              className="btn-secondary inline-flex w-full items-center justify-center gap-3 text-sm sm:w-auto sm:text-base"
            >
              Download Resume
              <FaDownload aria-hidden="true" />
            </a>
          </div>

          {/* Technology highlights */}
          <div className="mb-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-brand-border bg-brand-surface/70 px-3 py-2 text-xs font-medium text-brand-text transition-colors duration-300 hover:border-brand-primary/50 hover:text-brand-primary sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right profile section */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">

            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-full bg-gradient-to-tr from-brand-primary/30 to-brand-accent/30 blur-2xl transition-opacity duration-500 hover:opacity-100"
            />

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full border border-brand-primary/30"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-3 animate-pulse rounded-full border border-brand-accent/20 motion-reduce:animate-none"
            />

            {/* Profile image */}
            <img
              src={amitPhoto}
              alt="Amit Maurya, MERN Stack Developer"
              width="320"
              height="320"
              fetchPriority="high"
              decoding="async"
              className="relative h-44 w-44 rounded-full border-4 border-brand-surface object-cover shadow-glow transition-transform duration-500 hover:scale-[1.03] sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-80 lg:w-80 motion-reduce:transform-none"
            />

            {/* Floating information card */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10 sm:px-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <FaLaptopCode size={19} aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-bold text-brand-text">
                  Full-Stack Development
                </p>
                <p className="mt-1 text-xs text-brand-muted">
                  Web Applications
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        aria-label="Explore my skills"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-brand-muted transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary sm:flex motion-reduce:animate-none"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em]">
          SCROLL TO EXPLORE
        </span>

        <FaChevronDown
          className="animate-bounce motion-reduce:animate-none"
          size={13}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
