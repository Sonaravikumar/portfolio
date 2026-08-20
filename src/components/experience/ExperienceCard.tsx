import type { Experience } from "../../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="experience-title-group">
          <h3>{experience.role}</h3>
          <div className="experience-company">{experience.company}</div>
        </div>
        <span className="experience-duration">{experience.duration}</span>
      </div>

      <ul className="experience-bullets">
        {experience.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="experience-skills-section">
        <div className="experience-skills-title">Skills & Technologies</div>
        <div className="experience-skills-list">
          {experience.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;