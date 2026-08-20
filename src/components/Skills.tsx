import { skillCategories } from "../data/portfolio";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {skillCategories.map((category) => (
          <div
            className="skill-card"
            key={category.title}
          >
            <h3>{category.title}</h3>

            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;