import { skillCategories } from "../data/portfolio";
import skillsImage from "../assets/skills.jpg";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        I've <span className="gradient-text">Built With</span>
      </h2>
      <p className="section-subtitle">
        A curated selection of languages, frameworks, databases, and tools that I use to bring ideas to life.
      </p>

      <div className="skills-content">
        <div className="skills-image">
          <img src={skillsImage} alt="My Skills" />
        </div>

        <div className="skills-container">
          {skillCategories.map((category) => (
            <div
              className="skill-card"
              key={category.title}
            >
              <h3>{category.title}</h3>

              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
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