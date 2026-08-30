import { skillCategories } from "../data/portfolio";
import skillsImage from "../assets/skills.jpg";

function getCategoryIcon(title: string) {
  switch (title) {
    case "Backend & Architecture":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "Languages":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "Databases & Caching":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "AI & Integrations":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "Frontend Development":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "Tools & DevOps":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
  }
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        I've <span className="gradient-text">Built With</span>
      </h2>
      <p className="section-subtitle">
        A curated selection of languages, backend frameworks, databases, and architectural tools that I use to engineer robust digital systems.
      </p>

      <div className="skills-content">
        <div className="skills-image-wrapper">
          <div className="skills-image-glow"></div>
          <div className="skills-image-card">
            <div className="skills-image-header">
              <div className="skills-header-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="skills-header-badge">
                <span className="status-indicator"></span>
                <span>BACKEND ARCHITECTURE</span>
              </div>
            </div>

            <div className="skills-image-inner">
              <img src={skillsImage} alt="Backend Architecture & Developer Skills" />
            </div>

            <div className="skills-image-footer">
              <div className="skills-footer-pill">⚡ High Throughput</div>
              <div className="skills-footer-pill">🛡️ Secure APIs</div>
              <div className="skills-footer-pill">📬 Event-Driven</div>
            </div>
          </div>
        </div>

        <div className="skills-container">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  {getCategoryIcon(category.title)}
                </div>
                <div className="skill-card-info">
                  <h3>{category.title}</h3>
                  {category.description && (
                    <p className="skill-card-desc">{category.description}</p>
                  )}
                </div>
              </div>

              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-bullet">›</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;