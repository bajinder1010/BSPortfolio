import Intro from "../../components/intro";
import About from "../../components/about";
import ParticlesBackrgound from "../../components/ParticlesBackrgound";
import SectionEnd from "../../components/section-end";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import Contact from "../../components/contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-0">
    <ParticlesBackrgound>
     <Intro />
    </ParticlesBackrgound>
    <SectionEnd color="#f6f9fc" angle="4deg"/>
    <About />
    <SectionEnd color="#f6f9fc" angle="4deg"/>
    <Projects />
    <SectionEnd color="#f2f2f2" angle="4deg"/>
    <Skills />
    <SectionEnd color="#f2f2f2" angle="4deg"/>
    <Contact />
  </main>
  )
}
