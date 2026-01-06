import Hero from "../Hero";
import About from "../About";
import Education from "../Education";
import Contact from "../Contact";
import Footer from "../Footer";
import Projects from "../Projects";
import Skills from "../Skills";
import Achievements from "../Achievements";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nisal Wishwajith</title>
        <meta
          name="description"
          content="Nisal Wishwajith - Devops Engineer | Software Engineer"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nisal Wishwajith",
              "url": "https://nisal.dpdns.org",
              "sameAs": [
                "https://github.com/NisalWishwajith",
                "https://linkedin.com/in/your-linkedin"
              ]
            }
          `}
        </script>
      </Helmet>

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
