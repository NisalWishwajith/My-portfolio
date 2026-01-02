export default function About() {
  return (
    <section id="About" className="about--section">
      <div className="about--section--img">
        <img src="./img/about.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading"> About Me </h1>
          <p className="hero--section-description text-justify">
            I’m a 4th-year undergraduate student at the University of Colombo School of Computing with a strong passion
            for DevOps engineering. I enjoy working with technologies such as Linux, Git, MySQL, and Bash to
            build efficient and reliable systems. Over the years, I’ve also developed strong implementation skills
            that help me create complete and well-structured projects.
          </p>
          <p className="hero--section-description text-justify">
            Beyond deployment, I explore new tools, automation, and smarter ways to solve problems. I value
            teamwork and impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
