import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> Hi, I am </span>{" "}         
            <br />     
            Nisal Wishwajith
          </h1>
          <p className="section--title1">
            <Typewriter
              options={{
                strings: ["I am Web Developer", "I am DevOps Engineer"],
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
          <a href="./cv/cv.pdf" download>
            <button className="btn btn-primary hover:shadow-md"> Download CV </button>
          </a>
          <a href="https://github.com/NisalWishwajith" target="blank">
            <button className="btn border text-indigo-600 border-indigo-600 hover:shadow-md hover:opacity-85"> View Github </button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/heroimg.png" alt="Hero Section" />
      </div>
    </section>
  );
}
