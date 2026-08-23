import { experiences } from "../../data/portfolio";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">
        Work <span className="gradient-text">Experience</span>
      </h2>
      <p className="section-subtitle">
        A timeline of my professional career, roles, and accomplishments in building scalable backend systems.
      </p>

      <div className="experience-container">

        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.role}
            experience={experience}
          />
        ))}

      </div>
    </section>
  );
}

export default Experience;