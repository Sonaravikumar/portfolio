import type { Experience } from "../../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

function TrainEngine() {
  return (
    <div className="cartoon-train-engine" aria-hidden="true">
      {/* Animated Chimney Steam Puffs */}
      <div className="engine-steam-puffs">
        <span className="steam-puff puff-1">💨</span>
        <span className="steam-puff puff-2">💨</span>
        <span className="steam-puff puff-3">💨</span>
      </div>

      {/* Locomotive Front Facing Left */}
      <svg className="train-engine-svg" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trainBodyGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="trainCabinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="headlightBeamGrad" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Headlight Beam shining forward (left) */}
        <polygon points="12,22 -14,12 -14,32" fill="url(#headlightBeamGrad)" className="headlight-beam" />
        <circle cx="12" cy="22" r="3.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />

        {/* Cowcatcher / Front Grill pointing left */}
        <polygon points="16,34 6,34 10,24 16,24" fill="#334155" stroke="#475569" strokeWidth="1" />

        {/* Main Boiler Tank */}
        <rect x="14" y="16" width="40" height="18" rx="5" fill="url(#trainBodyGrad)" stroke="#0369a1" strokeWidth="1.5" />
        <line x1="26" y1="16" x2="26" y2="34" stroke="#0284c7" strokeWidth="1.5" />
        <line x1="40" y1="16" x2="40" y2="34" stroke="#0284c7" strokeWidth="1.5" />

        {/* Smokestack Chimney */}
        <rect x="19" y="6" width="8" height="10" rx="1.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
        <rect x="17" y="4" width="12" height="3" rx="1" fill="#38bdf8" />

        {/* Golden Bell on boiler */}
        <ellipse cx="33" cy="13" rx="3" ry="3.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />

        {/* Driver Cabin */}
        <rect x="52" y="8" width="22" height="26" rx="3" fill="url(#trainCabinGrad)" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Cabin Window with warm yellow glow */}
        <rect x="56" y="12" width="14" height="10" rx="2" fill="#fef08a" stroke="#0f172a" strokeWidth="1" />
        {/* Cartoon Driver Silhouette (with cap!) */}
        <circle cx="63" cy="16" r="3" fill="#0f172a" />
        <path d="M59 15 Q63 13 67 15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

        {/* Wheels & Driving Rod */}
        <g className="train-engine-wheels">
          <circle cx="23" cy="37" r="6.5" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" className="wheel-spin" />
          <circle cx="23" cy="37" r="2.5" fill="#f8fafc" />
          <circle cx="43" cy="37" r="6.5" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" className="wheel-spin" />
          <circle cx="43" cy="37" r="2.5" fill="#f8fafc" />
          <circle cx="63" cy="37" r="6.5" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" className="wheel-spin" />
          <circle cx="63" cy="37" r="2.5" fill="#f8fafc" />
          <line x1="23" y1="37" x2="63" y2="37" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" className="wheel-drive-rod" />
        </g>
      </svg>

      {/* Coupler connecting Locomotive to the 1st Carriage */}
      <div className="carriage-coupler engine-coupler" aria-hidden="true">
        <span className="coupler-joint">═🔗═</span>
      </div>
    </div>
  );
}

function TrainCarriage({ skill, isLast }: { skill: string; isLast?: boolean }) {
  return (
    <div className="cartoon-train-carriage">
      {/* Carriage Container Box */}
      <div className="carriage-box">
        <div className="carriage-roof-bar">
          <span className="roof-bolt"></span>
          <span className="roof-bolt"></span>
          <span className="roof-bolt"></span>
        </div>
        <div className="carriage-content">
          <span className="carriage-cargo-icon">📦</span>
          <span className="carriage-skill-title">{skill}</span>
        </div>
        {/* Dual Wheels Under Carriage */}
        <div className="carriage-wheels-pair" aria-hidden="true">
          <span className="mini-wheel">⚙️</span>
          <span className="mini-wheel">⚙️</span>
        </div>
      </div>

      {/* Coupler Hitch linking to next carriage OR Caboose light at end */}
      {!isLast ? (
        <div className="carriage-coupler" aria-hidden="true">
          <span className="coupler-joint">═🔗═</span>
        </div>
      ) : (
        <div className="carriage-coupler caboose-coupler" aria-hidden="true">
          <span className="caboose-light" title="End of Train">🚨</span>
        </div>
      )}
    </div>
  );
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

        {/* Cartoon Train Running Animation for Technologies & Architecture */}
        <div className="experience-skills-section">
          <div className="experience-skills-title">
            <span className="train-title-icon">🚂</span>
            <span>Technologies & Architecture Express</span>
            <span className="train-live-tag">LIVE CARGO</span>
          </div>
          <div className="experience-skills-marquee">
            <div className="experience-skills-track">
              {/* Train Set 1 */}
              <div className="cartoon-train-set">
                <TrainEngine />
                {experience.skills.map((skill, index) => (
                  <TrainCarriage
                    key={`train1-${skill}-${index}`}
                    skill={skill}
                    isLast={index === experience.skills.length - 1}
                  />
                ))}
              </div>

              {/* Train Set 2 (Identical for seamless infinite loop) */}
              <div className="cartoon-train-set" aria-hidden="true">
                <TrainEngine />
                {experience.skills.map((skill, index) => (
                  <TrainCarriage
                    key={`train2-${skill}-${index}`}
                    skill={skill}
                    isLast={index === experience.skills.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Cartoon Railroad Tracks */}
            <div className="experience-railroad-track" aria-hidden="true">
              <div className="rail-steel-top"></div>
              <div className="rail-wooden-sleepers"></div>
              <div className="rail-steel-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;