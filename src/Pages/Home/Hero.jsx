import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaDownload, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Simulate download progress (2 seconds)
    setTimeout(() => {
      setDownloading(false);

      // Trigger actual download
      const link = document.createElement("a");
      link.href = "./cv/Nisal_Wishwajith_Devops.pdf";
      link.download = "Nisal_Wishwajith_Devops.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <section id="Hero" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> Hi, I am </span>
            <br />
            Nisal Wishwajith
          </h1>
          <p className="section--title1">
            <Typewriter
              options={{
                strings: ["I am a Web Developer", "I am a DevOps Engineer"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                pauseFor: 2000,
              }}
            />
          </p>
          <p className="hero--section-description1">
            Transform ideas into resilient, high-performance web applications.
          </p>
        </div>

        <div className="pt-4 grid place-items-center md:flex grid-col-2 gap-4 md:justify-center lg:justify-start">
          {/* CV Canva Link -  */}
          <button
            className="btn btn-primary hover:shadow-md relative overflow-hidden flex items-center justify-center"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? (
              <span className="flex items-center gap-2">
                <span className="animate-pulse inline-block w-3 h-3 bg-white rounded-full"></span>
                Downloading
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <FaDownload size={20} />
                Download CV
              </span>
            )}
          </button>

          {/* Github button */}
          <Link to="https://github.com/NisalWishwajith" target="_blank" rel="noreferrer">
            <button className="btn border text-indigo-600 border-indigo-600 transition-all duration-300 ease-in-out hover:bg-indigo-50 hover:shadow-md">
              <span className="flex items-center gap-2">
                <FaGithub size={20} />
                View Github
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/heroimg.png" alt="Hero Section" />
      </div>
    </section>
  );
}
