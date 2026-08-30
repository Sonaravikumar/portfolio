import type { Experience } from "../../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className={`experience-card ${experience.isCurrent ? "current-role" : ""}`}>
      <div className="experience-timeline-node">
        <div className="node-ring"></div>
        <div className="node-dot"></div>
      </div>

      <div className="experience-card-content">
        <div className="experience-header">
          <div className="experience-title-group">
            <div className="experience-meta-top">
              <span className="experience-company-name">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                {experience.company}
              </span>

              {experience.location && (
                <span className="experience-location">
                  📍 {experience.location}
                </span>
              )}

              {experience.type && (
                <span className="experience-type-tag">
                  {experience.type}
                </span>
              )}

              {experience.isCurrent && (
                <span className="experience-current-badge">
                  <span className="pulse-dot"></span> Present Role
                </span>
              )}
            </div>

            <h3 className="experience-role-title">{experience.role}</h3>
          </div>

          <div className="experience-duration-badge">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{experience.duration}</span>
          </div>
        </div>

        <div className="experience-responsibilities">
          <div className="responsibilities-title">Key Responsibilities & Architectural Impact</div>
          <ul className="experience-bullets">
            {experience.description.map((point, index) => (
              <li key={index}>
                <span className="bullet-icon">✦</span>
                <span className="bullet-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="experience-skills-section">
          <div className="experience-skills-title">Technologies & Architecture</div>
          <div className="experience-skills-list">
            {experience.skills.map((skill) => (
              <span key={skill} className="experience-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;