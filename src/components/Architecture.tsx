import { useState } from "react";
import { architectures } from "../data/portfolio";
import type { ArchitectureNode } from "../types/portfolio";

function getNodeIcon(type: ArchitectureNode["type"]) {
  switch (type) {
    case "client":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "gateway":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "queue":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "integration":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function getLayerBadgeClass(type: ArchitectureNode["type"]) {
  switch (type) {
    case "client":
      return "layer-badge-client";
    case "gateway":
      return "layer-badge-gateway";
    case "backend":
      return "layer-badge-backend";
    case "queue":
      return "layer-badge-queue";
    case "ai":
      return "layer-badge-ai";
    case "database":
      return "layer-badge-database";
    case "integration":
      return "layer-badge-integration";
    default:
      return "layer-badge-default";
  }
}

function Architecture() {
  const [selectedId, setSelectedId] = useState<string>(architectures[0].id);

  const activeArch =
    architectures.find((arch) => arch.id === selectedId) || architectures[0];

  return (
    <section className="architecture" id="architecture">
      <h2 className="section-title">
        System <span className="gradient-text">Architectures</span>
      </h2>
      <p className="section-subtitle">
        Production-grade system designs, request lifecycles, and asynchronous event-driven pipelines I've engineered.
      </p>

      {/* Interactive System Tabs */}
      <div className="arch-tabs">
        {architectures.map((arch) => {
          const isActive = arch.id === activeArch.id;
          return (
            <button
              key={arch.id}
              className={`arch-tab-btn ${isActive ? "active" : ""}`}
              onClick={() => setSelectedId(arch.id)}
            >
              <span className="arch-tab-status"></span>
              <span className="arch-tab-title">{arch.title.split(" - ")[0]}</span>
              <span className="arch-tab-category">{arch.category}</span>
            </button>
          );
        })}
      </div>

      {/* Main Architectural Blueprint Showcase */}
      <div className="arch-showcase">
        <div className="arch-header-bar">
          <div className="arch-header-left">
            <div className="arch-badge-row">
              <span className="arch-category-tag">{activeArch.category}</span>
              <span className="arch-live-indicator">
                <span className="live-dot"></span> Production Architecture
              </span>
            </div>
            <h3 className="arch-title">{activeArch.title}</h3>
            <p className="arch-tagline">{activeArch.tagline}</p>
          </div>

          <div className="arch-highlights-tags">
            {activeArch.highlights.map((tag) => (
              <span key={tag} className="arch-highlight-pill">
                ✦ {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="arch-overview-box">
          <p>{activeArch.overview}</p>
        </div>

        {/* Visual Data Flow Pipeline */}
        <div className="arch-pipeline-container">
          <div className="pipeline-title-row">
            <span className="pipeline-title">⚡ End-to-End Request & Data Flow Pipeline</span>
            <span className="pipeline-hint">Hover over steps for protocol details</span>
          </div>

          <div className="arch-pipeline">
            {activeArch.nodes.map((node, index) => (
              <div key={node.name} className="arch-node-wrapper">
                <div className={`arch-node-card ${getLayerBadgeClass(node.type)}`}>
                  <div className="arch-node-top">
                    <span className="arch-step-num">0{index + 1}</span>
                    {node.protocol && (
                      <span className="arch-protocol-badge">{node.protocol}</span>
                    )}
                  </div>

                  <div className="arch-node-main">
                    <div className="arch-node-icon">
                      {getNodeIcon(node.type)}
                    </div>
                    <div className="arch-node-info">
                      <span className="arch-layer-name">{node.layer}</span>
                      <h4 className="arch-node-name">{node.name}</h4>
                    </div>
                  </div>

                  <p className="arch-node-detail">{node.detail}</p>
                </div>

                {index !== activeArch.nodes.length - 1 && (
                  <div className="arch-connector">
                    <div className="connector-line">
                      <div className="connector-pulse"></div>
                    </div>
                    <div className="connector-arrow">›</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Architecture Highlights */}
        <div className="arch-details-grid">
          <div className="arch-decisions-card">
            <div className="arch-card-heading">
              <span className="card-heading-icon">⚙️</span>
              <h4>Core Engineering Decisions</h4>
            </div>
            <ul className="arch-decisions-list">
              {activeArch.decisions.map((decision, i) => {
                const [title, desc] = decision.includes(":")
                  ? decision.split(/:(.+)/)
                  : [decision, ""];
                return (
                  <li key={i}>
                    <span className="decision-bullet">✓</span>
                    <div>
                      <strong>{title}:</strong> {desc}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="arch-specs-card">
            <div className="arch-card-heading">
              <span className="card-heading-icon">🛡️</span>
              <h4>System Guarantees & Patterns</h4>
            </div>
            <div className="arch-specs-list">
              <div className="arch-spec-item">
                <span className="spec-label">Pattern</span>
                <span className="spec-value">Decoupled Microservices & Worker Queues</span>
              </div>
              <div className="arch-spec-item">
                <span className="spec-label">Reliability</span>
                <span className="spec-value">Auto-Retry Dead Letter Queues & Failover</span>
              </div>
              <div className="arch-spec-item">
                <span className="spec-label">Security</span>
                <span className="spec-value">HMAC Signature Verification & Rate Limiting</span>
              </div>
              <div className="arch-spec-item">
                <span className="spec-label">Persistence</span>
                <span className="spec-value">Atomic Operations & Distributed Redis Cache</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;