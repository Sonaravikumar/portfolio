export interface Profile {
  name: string;
  role: string;
  tagline: string;
  github: string;
  linkedin: string;
  about: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  type?: string;
  duration: string;
  isCurrent?: boolean;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  category?: string;
  tagline?: string;
  status?: string;
  description: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  architectureId?: string;
}

export interface ArchitectureNode {
  layer: string;
  name: string;
  type: "client" | "gateway" | "backend" | "queue" | "ai" | "database" | "integration";
  detail: string;
  protocol?: string;
}

export interface Architecture {
  id: string;
  title: string;
  tagline: string;
  category: string;
  overview: string;
  highlights: string[];
  nodes: ArchitectureNode[];
  decisions: string[];
  flow?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  category: string;
  credentialType: "pdf" | "image";
  credentialPath: string;
  skills: string[];
  description: string;
  url?: string;
}