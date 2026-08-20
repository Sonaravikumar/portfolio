import { experiences } from "../../data/portfolio";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>

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