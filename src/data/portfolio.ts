export const profile = {
  name: "Sona Pandi",
  role: "Backend Developer",
  tagline:
    "Building scalable APIs, automation systems and AI-powered applications.",

  github: "https://github.com/Sonaravikumar",

  linkedin:
    "https://www.linkedin.com/in/sonapandi-ravikumar",
  about:
    "Backend Developer with 1+ year of experience building scalable REST APIs and web applications using Node.js, Express.js, and MongoDB. Skilled in backend architecture, third-party API integrations, authentication, and automation workflows. Experienced in developing messaging automation solutions and contributing to full-stack applications with React.js. Passionate about creating reliable, efficient, and scalable software solutions."
};

export const skillCategories = [
  {
    title: "Backend & Architecture",
    description: "Scalable server systems, queues & API design",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "RabbitMQ (Queues)",
      "Rate Limiting",
      "Webhooks & Events"
    ]
  },
  {
    title: "Languages",
    description: "Core programming & query languages",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "PostgreSQL",
      "HTML5 / CSS3"
    ]
  },
  {
    title: "Databases & Caching",
    description: "Data storage, persistence & fast retrieval",
    skills: [
      "MongoDB",
      "Redis",
      "PostgreSQL"
    ]
  },
  {
    title: "AI & Integrations",
    description: "Third-party APIs & intelligent workflows",
    skills: [
      "OpenAI API",
      "WhatsApp Cloud API",
      "Razorpay Gateway",
      "Email Automation"
    ]
  },
  {
    title: "Frontend Development",
    description: "Basic Modern, responsive client interfaces",
    skills: [
      "React.js",
      "Tailwind CSS",
      "GrapesJS",
      "Responsive Design"
    ]
  },
  {
    title: "Tools & DevOps",
    description: "Development, testing & deployment",
    skills: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Render / Netlify"
    ]
  }
];

export const experiences = [
  {
    role: "Software Developer - Backend",
    company: "Zevotria",
    duration: "Jan 2025 - Present",
    description: [
      "Built and maintained scalable REST APIs using Node.js, Express.js, and MongoDB with authentication, RBAC, and optimized database queries.",
      "Implemented rate-limited API architecture to protect backend services and control request traffic.",
      "Designed and implemented job queue system using RabbitMQ for asynchronous background tasks in messaging automation workflows.",
      "Integrated OpenAI API, Razorpay payment gateway, and Meta WhatsApp Cloud API, including webhook verification and realtime event handling.",
      "Designed keyword-based WhatsApp automation workflows reducing manual response effort.",
      "Developed email notification system for AI career platform events.",
      "Built automation features supporting broadcast messaging and scheduled drip campaigns for large-scale customer engagement with scheduled execution.",
      "Debugged and resolved production issues, fixing runtime bugs and improving system reliability."
    ],
    skills: [
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Rate Limiting",
      "Redis",
      "OpenAI API",
      "WhatsApp API",
      "Razorpay"
    ]
  },

  {
    role: "Web Development Intern",
    company: "Masfob@Success Life Mantra",
    duration: "Aug 2024 - Dec 2024",
    description: [
      "Designed and customized responsive landing pages using HTML, Tailwind CSS, and React.js.",
      "Built and modified UI components for email builder projects using GrapesJS."
    ],
    skills: [
      "HTML",
      "Tailwind CSS",
      "React",
      "GrapesJS"
    ]
  },

  {
    role: "Frontend Intern",
    company: "Lithi Info Tech",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Implemented React.js fundamentals and built reusable UI components.",
      "Assisted in debugging and feature enhancement."
    ],
    skills: [
      "HTML",
      "CSS",
      "React"
    ]
  }
];

export const projects = [
  {
    title: "CareerPro AI",
    description: [
      "Developed backend services for an AI-powered career platform supporting resume generation, LinkedIn optimization, interview preparation, and job tracking.",
      "Integrated OpenAI API to power AI-driven features and content generation. Built REST APIs for managing user data, workflows, and automation processes.",
      "Implemented email notification systems and optimized backend logic for performance and scalability."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],

    liveDemo:
      "https://careerpro-ai.com",
  },

  {
    title: "Inderact",
    description: [
      "Built a scalable backend for a WhatsApp automation platform using Node.js and Meta WhatsApp Cloud API. Implemented template messaging, keyword-based auto replies, and chatbot workflows.",
      "Designed asynchronous processing using RabbitMQ for handling background jobs and message queues. Integrated webhook-based event handling for real-time communication.",
      "Developed features like broadcast messaging, drip campaigns, and scheduled message delivery. Focused on building reliable, production-ready backend systems with optimized API performance."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Meta WhatsApp Cloud API",
      "RabbitMQ"
    ],
    liveDemo:
      "https://inderact.masfob.com",
  },

  {
    title: "Website Builder Platform",
    description: [
      "Built a no-code website builder enabling users to create, edit, and publish websites without coding. Developed backend APIs and contributed to frontend implementation using React.js and GrapesJS.",
    ],
    technologies: [
      "React.js",
      "GrapesJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    liveDemo:
      "https://website-builder-2026.netlify.app",
  },

  {
    title: "AI Gen Studio",
    description: [
      "Developed backend APIs for AI-powered content generation, post ideation, and marketing automation workflows.",
      "Designed scalable API architecture and integrated AI services to support content creation use cases."
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "OpenAI API",
    ],

    liveDemo:
      "https://aigenstudio-server.onrender.com",
  },
];

export const architectures: import("../types/portfolio").Architecture[] = [
  {
    id: "inderact",
    title: "Inderact - WhatsApp Cloud Automation",
    tagline: "Event-Driven Webhook Ingestion & Asynchronous Message Queue Pipeline",
    category: "Asynchronous & Event-Driven",
    overview:
      "Ingests high-frequency WhatsApp Cloud API webhooks with HMAC-SHA256 signature verification, decouples traffic spikes through RabbitMQ message queues, and orchestrates keyword-based automated bot responses and scheduled broadcast drip campaigns with rate limiting.",
    highlights: [
      "Meta Webhook Ingestion",
      "RabbitMQ AMQP Queue",
      "Rate-Limited Outbound",
      "Redis Session Caching",
      "MongoDB Event Logs"
    ],
    decisions: [
      "Decoupled Webhook Ingestion: Used RabbitMQ queues to immediately acknowledge incoming Meta webhooks (<50ms) and process business logic asynchronously, preventing HTTP timeout dropped events.",
      "Strict Rate-Limiting Engine: Built token-bucket rate limiters on outbound broadcast messages to stay compliant with Meta Cloud API Tier-1 throughput constraints.",
      "Stateful Conversation Caching: Stored user conversational context in Redis to enable sub-millisecond keyword auto-reply lookups without hammering the primary database."
    ],
    nodes: [
      {
        layer: "Client & Ingress",
        name: "WhatsApp User / Flutter Dashboard",
        type: "client",
        protocol: "HTTPS / Mobile",
        detail: "Users send inbound chats; managers schedule campaigns from Flutter dashboard."
      },
      {
        layer: "Security & Ingestion",
        name: "Meta Cloud API & Webhook Gate",
        type: "gateway",
        protocol: "HTTPS Webhooks",
        detail: "Verifies HMAC-SHA256 signature and authenticates webhook payload origins."
      },
      {
        layer: "Core API Server",
        name: "Node.js & Express REST Core",
        type: "backend",
        protocol: "REST & JSON",
        detail: "Parses message payloads, applies JWT authorization & routes to workflow handlers."
      },
      {
        layer: "Message Broker",
        name: "RabbitMQ Task Queue Cluster",
        type: "queue",
        protocol: "AMQP Protocol",
        detail: "Buffers bursts, manages broadcast queues & distributes background worker tasks."
      },
      {
        layer: "Persistence & Cache",
        name: "MongoDB & Redis Cluster",
        type: "database",
        protocol: "Mongoose / TCP",
        detail: "Persists conversation history, broadcast analytics & cached session states."
      }
    ],
    flow: [
      "WhatsApp / Flutter App",
      "Meta Cloud Webhook Gate",
      "Node.js & Express REST Core",
      "RabbitMQ Task Queue",
      "MongoDB & Redis Cluster"
    ]
  },
  {
    id: "careerpro",
    title: "CareerPro AI - Career & Resume Engine",
    tagline: "Multimodal AI Orchestration & Automated Notification Architecture",
    category: "AI & Content Pipelines",
    overview:
      "Scalable backend architecture that coordinates OpenAI model inference for resume generation, LinkedIn profile optimization, and mock interview coaching, complete with email dispatching and structured JSON validation.",
    highlights: [
      "OpenAI GPT-4 Integration",
      "Structured Prompt Schema",
      "Async Email Workers",
      "RBAC Authorization",
      "MongoDB Atlas Store"
    ],
    decisions: [
      "Deterministic JSON Outputs: Enforced OpenAI JSON-mode structured schema validation to guarantee reliable UI rehydration and avoid parsing errors.",
      "Asynchronous Email Dispatching: Offloaded email notifications and generated career PDF deliverables to asynchronous background jobs for instant UI response.",
      "Optimized MongoDB Indexing: Indexed user profiles and career milestone histories with compound queries for efficient search."
    ],
    nodes: [
      {
        layer: "Client Layer",
        name: "React.js Interactive SPA",
        type: "client",
        protocol: "HTTPS / SPA",
        detail: "Interactive resume builder, career tracking dashboard & real-time streaming UI."
      },
      {
        layer: "API Gateway & Auth",
        name: "Express.js Backend & Rate Limiter",
        type: "backend",
        protocol: "RESTful API",
        detail: "Validates JWT tokens, enforces user quota limits & sanitizes prompt parameters."
      },
      {
        layer: "AI Inference Engine",
        name: "OpenAI GPT-4 API Service",
        type: "ai",
        protocol: "HTTPS / REST",
        detail: "Executes prompt chains for ATS resume optimization & interview simulation."
      },
      {
        layer: "Notification Engine",
        name: "Automated Email Service",
        type: "integration",
        protocol: "SMTP / Webhooks",
        detail: "Dispatches generated career reports and status alerts to candidates."
      },
      {
        layer: "Persistence Layer",
        name: "MongoDB Atlas Database",
        type: "database",
        protocol: "Mongoose Driver",
        detail: "Stores career profiles, generated resumes, and user usage metrics."
      }
    ],
    flow: [
      "React.js Interactive SPA",
      "Express.js Backend & Auth",
      "OpenAI GPT-4 API Service",
      "Automated Email Service",
      "MongoDB Atlas Database"
    ]
  },
  {
    id: "aigenstudio",
    title: "AI Gen Studio - Marketing Content Engine",
    tagline: "Prompt Chaining, Marketing Copy Ideation & Automated Publishing",
    category: "Generative AI & Microservices",
    overview:
      "Modular backend API engine for multi-channel content generation, social media post ideation, and automated marketing workflows powered by dynamic prompt template factories.",
    highlights: [
      "OpenAI API Prompt Pipelines",
      "RESTful API Architecture",
      "Token Quota Management",
      "Render Cloud Hosting",
      "Mongoose Schema Validation"
    ],
    decisions: [
      "Modular Prompt Factories: Created reusable prompt templating pipelines allowing dynamic injection of tone, industry keywords, and length constraints.",
      "Resilient Error Handling: Implemented exponential backoff retries for third-party AI API timeouts and rate-limit responses.",
      "Stateless Container Deployment: Deployed on Render with zero-downtime rolling updates and environment secret protection."
    ],
    nodes: [
      {
        layer: "Client Dashboard",
        name: "React.js Marketing Dashboard",
        type: "client",
        protocol: "HTTPS / JSON",
        detail: "Visual studio for marketers to configure prompt parameters and preview copy."
      },
      {
        layer: "Backend Gateway",
        name: "Node.js & Express API Server",
        type: "backend",
        protocol: "RESTful API",
        detail: "Applies authentication, validates content quotas & prepares AI prompts."
      },
      {
        layer: "AI Inference",
        name: "OpenAI GPT Engine Integration",
        type: "ai",
        protocol: "REST API",
        detail: "Executes multi-step prompt workflows for social copy, headlines & hashtags."
      },
      {
        layer: "Data Store",
        name: "MongoDB Cloud Database",
        type: "database",
        protocol: "Mongoose ODM",
        detail: "Stores generated creative assets, revisions, and engagement analytics."
      }
    ],
    flow: [
      "React Marketing Dashboard",
      "Node.js API Server",
      "OpenAI GPT Engine",
      "MongoDB Cloud Database"
    ]
  },
  {
    id: "websitebuilder",
    title: "No-Code Website Builder Engine",
    tagline: "Visual DOM Serialization & Instant Static Site Publishing",
    category: "Fullstack Platform Architecture",
    overview:
      "Architecture combining GrapesJS modular canvas with an Express and MongoDB backend for real-time DOM serialization, asset hosting, and instant publishing to global CDN hosting.",
    highlights: [
      "GrapesJS Canvas Engine",
      "DOM JSON Serialization",
      "MongoDB Asset Storage",
      "Netlify Edge Deployment",
      "Cross-Origin API Bridge"
    ],
    decisions: [
      "JSON Component Tree Storage: Stored page components as structured JSON schemas to allow instant editing, version restoration, and clean HTML rehydration.",
      "Optimized Static Export: Generated optimized HTML/CSS bundles upon publish for lightning-fast edge delivery on Netlify.",
      "Scoped CSS Namespacing: Enforced style isolation to prevent builder UI CSS from conflicting with user website designs."
    ],
    nodes: [
      {
        layer: "Builder Studio",
        name: "React.js + GrapesJS Canvas",
        type: "client",
        protocol: "Client DOM Engine",
        detail: "Drag-and-drop page assembly, layout customization & live preview rendering."
      },
      {
        layer: "Backend Core",
        name: "Node.js & Express API",
        type: "backend",
        protocol: "REST / HTTPS",
        detail: "Serializes canvas states, manages project versioning & verifies access tokens."
      },
      {
        layer: "Document Store",
        name: "MongoDB Database",
        type: "database",
        protocol: "Mongoose ODM",
        detail: "Stores component JSON trees, custom styling sheets & website project metadata."
      },
      {
        layer: "Edge Hosting",
        name: "Netlify Global CDN",
        type: "integration",
        protocol: "Static / Edge CDN",
        detail: "Deploys compiled static site assets for instant global delivery."
      }
    ],
    flow: [
      "React + GrapesJS Canvas",
      "Node.js & Express API",
      "MongoDB Database",
      "Netlify Global CDN"
    ]
  }
];

export const certifications = [
  {
    title: "Getting Started with NodeJS",
    url: "",
  },
  {
    title: "Introduction to Express JS",
    url: "",
  },
  {
    title: "AI For India 2.0",
    url: "",
  },
];