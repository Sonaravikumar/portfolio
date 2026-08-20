import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;