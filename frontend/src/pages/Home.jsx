import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal y={20}>
        <Stats />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Achievements />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
