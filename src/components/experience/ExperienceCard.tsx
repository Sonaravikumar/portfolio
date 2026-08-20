import type { Experience } from "../../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <h3>{experience.role}</h3>

      <h4>{experience.company}</h4>

      <p>{experience.duration}</p>

      <ul>
        {experience.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;