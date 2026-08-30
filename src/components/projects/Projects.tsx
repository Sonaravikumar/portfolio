import { useState } from "react";
import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";

const filterCategories = [
  "All Projects",
  "AI & Automation",
  "Backend & APIs",
  "Full-Stack Web App"
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") return true;
    if (activeFilter === "AI & Automation") {
      return (
        project.category?.includes("AI") ||
        project.technologies.includes("OpenAI API")
      );
    }
    if (activeFilter === "Backend & APIs") {
      return (
        project.category?.includes("Backend") ||
        project.category?.includes("Messaging") ||
        project.technologies.includes("RabbitMQ")
      );
    }
    if (activeFilter === "Full-Stack Web App") {
      return (
        project.category?.includes("Full-Stack") ||
        project.technologies.includes("GrapesJS") ||
        project.technologies.includes("React.js")
      );
    }
    return true;
  });

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="section-subtitle">
        Production applications, backend services, and scalable API platforms I've engineered from scratch.
      </p>

      {/* Project Filter Tabs */}
      <div className="project-filters">
        {filterCategories.map((category) => (
          <button
            key={category}
            className={`project-filter-btn ${activeFilter === category ? "active" : ""}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;