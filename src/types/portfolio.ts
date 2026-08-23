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
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

export interface Architecture {
  title: string;
  flow: string[];
}

export interface Certification {
  title: string;
  url: string;
}