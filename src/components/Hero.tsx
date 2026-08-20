import { profile } from "../data/portfolio";
import heroImage from "../assets/herobg.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(3,7,18,0.75),
            rgba(3,7,18,0.85)
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="hero-content">
        <p className="hero-tag">
          👋 Hello, I'm
        </p>

        <h1>
          <span className="gradient-text">
            {profile.name}
          </span>
        </h1>

        <h2>{profile.role}</h2>

        <p className="hero-description">
          {profile.tagline}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Work
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-card">
          <div className="visual-header">
            <span className="visual-dot"></span>
            <span className="visual-dot"></span>
            <span className="visual-dot"></span>
          </div>

          <div className="visual-code">
            <p><span>const</span> developer = {"{"}</p>
            <p>&nbsp;&nbsp;name: <span>"{profile.name}"</span>,</p>
            <p>&nbsp;&nbsp;role: <span>"{profile.role}"</span>,</p>
            <p>
              &nbsp;&nbsp;skills: [
              <span>"Node.js"</span>,
              <span>"TypeScript"</span>,
              <span>"MongoDB"</span>
              ],
            </p>
            <p>
              &nbsp;&nbsp;passion:
              <span>"Scalable Backend Systems"</span>
            </p>
            <p>{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;