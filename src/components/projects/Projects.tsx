import { useState } from "react";
import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectDispatcher from "./ProjectDispatcher";
import "./ProjectsCartoon.css";

const filterCategories = [
  "All Projects",
  "AI & Automation"
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") return true;
    if (activeFilter === "AI & Automation") {
      return (
        project.category?.includes("AI") ||
        project.technologies.includes("OpenAI API") ||
        project.technologies.includes("ComfyUI") ||
        project.technologies.includes("Qwen (Open Source)") ||
        project.technologies.includes("Claude & MCP")
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

      {/* Cartoon Project Command Lab & Dispatcher */}
      <ProjectDispatcher
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        categories={filterCategories}
      />

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;