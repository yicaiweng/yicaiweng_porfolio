

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <p className="eyebrow">HELLO, I&apos;M YICAI</p>
        <h1>Software Developer</h1>
        <p className="hero-role">Front-End · Mobile · Full-Stack · AI</p>
        <p className="hero-description">
          I build thoughtful, user-focused applications across web and mobile, and
          I&apos;m expanding that engineering foundation into AI-powered products.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="portrait-placeholder" aria-label="Portrait placeholder">
        <div className="portrait-inner">
          <img className="portrait-img" src="/profile_pic.png" alt="" />
        </div>
      </div>
    </section>
  );
}
