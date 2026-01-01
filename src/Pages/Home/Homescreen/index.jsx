import Hero from "../Hero";
import About from "../About";
import Education from "../Education";
import Contact from "../Contact";
import Footer from "../Footer";
import Projects from "../Projects";
import Skills from "../Skills";
import Achievements from "../Achievements";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-2xl">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Achievements />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
