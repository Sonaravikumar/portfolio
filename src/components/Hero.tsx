import { profile } from "../data/portfolio";
import { FiDownload, FiArrowUpRight  } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero">
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

        {/* Quick Contact Info */}
        <div className="hero-contact-bar">
          <span className="hero-contact-item">📍 Madurai, Tamil Nadu, India</span>
          <span className="hero-contact-item">✉ sonaravikumar2872@gmail.com</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary">
            Build Together <FiArrowUpRight />
          </a>
          <a
            href="/Sonapandi_Resume.pdf"
            download="Sonapandi_Resume.pdf"
            className="hero-btn-secondary"
          >
            <FiDownload /> Grab My CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="mailto:sonaravikumar2872@gmail.com"
            className="hero-social-icon"
            aria-label="Email"
          >
            ✉
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