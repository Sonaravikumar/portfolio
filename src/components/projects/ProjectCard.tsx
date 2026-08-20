import type { Project } from "../../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      {project.description.map((desc, idx) => (
        <p key={idx}>{desc}</p>
      ))}

      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      )}
    </article>
  );
}

export default ProjectCard;