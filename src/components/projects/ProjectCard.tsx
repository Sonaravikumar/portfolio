import type { Project } from "../../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-glow"></div>

      <div className="project-card-inner">
        {/* Top Meta Bar */}
        <div className="project-meta-bar">
          {project.category && (
            <span className="project-category-badge">{project.category}</span>
          )}

          {project.status && (
            <span className="project-status-badge">
              <span className="status-dot"></span>
              {project.status}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="project-title-area">
          <h3 className="project-title">{project.title}</h3>
          {project.tagline && (
            <p className="project-tagline">{project.tagline}</p>
          )}
        </div>

        {/* Description Bullets */}
        <div className="project-desc-group">
          {project.description.map((desc, idx) => (
            <div key={idx} className="project-desc-item">
              <span className="project-desc-bullet">›</span>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="project-tech-section">
          <div className="project-tech-label">Stack & Architecture</div>
          <div className="project-technologies">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="project-links">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="project-btn-primary"
            >
              <span>Live Application</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}

          {project.architectureId && (
            <a
              href="#architecture"
              className="project-btn-secondary"
            >
              <span>View Architecture</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn-github"
              aria-label="View on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;