import { useState, useEffect } from "react";
import { certifications } from "../data/portfolio";
import type { Certification } from "../types/portfolio";

function getCategoryIcon(category: string) {
  if (category.includes("Backend")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (category.includes("Framework")) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function Certifications() {
  const [activeModalCert, setActiveModalCert] = useState<Certification | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalCert(null);
      }
    };
    if (activeModalCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalCert]);

  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">
        My <span className="gradient-text">Certifications</span>
      </h2>
      <p className="section-subtitle">
        Accredited credentials and specialized engineering certifications validating my backend, framework, and AI development skills.
      </p>

      <div className="certifications-container">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-card-inner">
              {/* Header Bar */}
              <div className="cert-header-bar">
                <span className="cert-category-badge">
                  {getCategoryIcon(cert.category)}
                  <span>{cert.category}</span>
                </span>

                <span className={`cert-type-pill ${cert.credentialType === "pdf" ? "pill-pdf" : "pill-img"}`}>
                  {cert.credentialType === "pdf" ? "📄 PDF Document" : "🖼️ Image Credential"}
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="cert-info-main">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer-row">
                  <span className="cert-issuer-badge">
                    <span className="cert-verified-check">✓</span>
                    {cert.issuer}
                  </span>
                  {cert.issueDate && (
                    <span className="cert-date-badge">📅 {cert.issueDate}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="cert-description">{cert.description}</p>

              {/* Skills */}
              <div className="cert-skills-area">
                <div className="cert-skills-label">Core Competencies</div>
                <div className="cert-skills-list">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="cert-actions">
                <button
                  type="button"
                  className="cert-btn-primary"
                  onClick={() => setActiveModalCert(cert)}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>View Certificate</span>
                </button>

                <a
                  href={cert.credentialPath}
                  download
                  className="cert-btn-download"
                  title="Download Credential"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download</span>
                </a>

                <a
                  href={cert.credentialPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-external"
                  title="Open in new tab"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Certificate Preview Modal */}
      {activeModalCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="cert-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-header-info">
                <span className="cert-modal-category">
                  {activeModalCert.category}
                </span>
                <h3 className="cert-modal-title">{activeModalCert.title}</h3>
                <div className="cert-modal-issuer">
                  Issued by <strong>{activeModalCert.issuer}</strong>
                </div>
              </div>

              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Content / Document Viewer */}
            <div className="cert-modal-body">
              {activeModalCert.credentialType === "pdf" ? (
                <div className="cert-pdf-viewer">
                  <iframe
                    src={`${activeModalCert.credentialPath}#toolbar=0&navpanes=0`}
                    title={activeModalCert.title}
                    className="cert-iframe"
                  />
                </div>
              ) : (
                <div className="cert-image-viewer">
                  <img
                    src={activeModalCert.credentialPath}
                    alt={activeModalCert.title}
                    className="cert-modal-img"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="cert-modal-footer">
              <span className="cert-modal-hint">
                Official credential verified for Sona Pandi
              </span>

              <div className="cert-modal-btn-group">
                <a
                  href={activeModalCert.credentialPath}
                  download
                  className="cert-modal-btn-download"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download {activeModalCert.credentialType.toUpperCase()}</span>
                </a>

                <a
                  href={activeModalCert.credentialPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-btn-tab"
                >
                  <span>Open Fullscreen ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;