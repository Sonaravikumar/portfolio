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

export const experiences: import("../types/portfolio").Experience[] = [
  {
    role: "Software Developer - Backend",
    company: "Zevotria",
    location: "Madurai, India",
    type: "Full-time",
    duration: "Jan 2025 - Present",
    isCurrent: true,
    description: [
      "Engineered and maintained high-throughput REST APIs using Node.js, Express.js, and MongoDB with JWT authentication, RBAC authorization, and optimized compound indexing.",
      "Architected rate-limited request throttling systems to safeguard backend microservices against traffic surges and malicious abuse.",
      "Designed and deployed asynchronous task queue workers using RabbitMQ for high-volume WhatsApp broadcast campaigns and background event processing.",
      "Integrated OpenAI GPT-4 API, Razorpay Payment Gateway, and Meta WhatsApp Cloud API with HMAC-SHA256 webhook signature validation and real-time event streaming.",
      "Built automated keyword chatbot workflows and drip marketing engines supporting scheduled broadcast execution for thousands of users.",
      "Monitored production services, debugged runtime bottlenecks, and reduced API response latencies."
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Redis",
      "Rate Limiting",
      "OpenAI API",
      "WhatsApp Cloud API",
      "Razorpay",
      "REST APIs"
    ]
  },
  {
    role: "Web Development Intern",
    company: "Masfob @ Success Life Mantra",
    location: "Remote",
    type: "Internship",
    duration: "Aug 2024 - Dec 2024",
    isCurrent: false,
    description: [
      "Developed and customized responsive, high-converting landing pages using HTML5, Tailwind CSS, and React.js.",
      "Engineered visual drag-and-drop UI components for interactive email builder workflows using GrapesJS.",
      "Collaborated with senior engineers to implement client-side state management and cross-browser responsiveness."
    ],
    skills: [
      "React.js",
      "Tailwind CSS",
      "GrapesJS",
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "REST APIs"
    ]
  },
  {
    role: "Frontend Intern",
    company: "Lithi Info Tech",
    location: "Madurai, India",
    type: "Internship",
    duration: "Jan 2024 - Apr 2024",
    isCurrent: false,
    description: [
      "Built reusable, modular UI components using React.js and CSS modules following clean code principles.",
      "Assisted in frontend performance optimization, API data binding, and resolving cross-browser layout defects.",
      "Utilized Git for feature branching, code reviews, and collaborative team sprints."
    ],
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Git & GitHub",
      "UI/UX Design"
    ]
  }
];

export const projects: import("../types/portfolio").Project[] = [
  {
    title: "CareerPro AI",
    category: "AI Platform & Career Engine",
    tagline: "Multimodal AI career platform for ATS resume generation, LinkedIn optimization & interview simulation.",
    status: "Live Production",
    description: [
      "Engineered backend microservices for an AI career suite enabling automated ATS-friendly resume generation, LinkedIn profile enhancement, and real-time interview coaching.",
      "Integrated OpenAI GPT-4 API with strict JSON schema validation for predictable content synthesis and prompt pipelining.",
      "Implemented asynchronous email delivery workers and optimized database queries with MongoDB indexing."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "React.js",
      "RESTful APIs"
    ],
    liveDemo: "https://careerpro-ai.com",
    architectureId: "careerpro"
  },
  {
    title: "Inderact WhatsApp Automation",
    category: "Messaging & Event Queues",
    tagline: "High-scale WhatsApp Cloud API automation engine with RabbitMQ worker queues and webhook security.",
    status: "Production Platform",
    description: [
      "Built a production-grade backend for WhatsApp automation using Node.js and Meta WhatsApp Cloud API with HMAC-SHA256 signature verification.",
      "Designed asynchronous RabbitMQ message queues to handle traffic spikes, broadcast drip campaigns, and scheduled delivery without dropping webhook connections.",
      "Implemented keyword auto-replies with Redis conversational state caching and token-bucket API rate limiting."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Meta WhatsApp Cloud API",
      "RabbitMQ",
      "Redis"
    ],
    liveDemo: "https://inderact.masfob.com",
    architectureId: "inderact"
  },
  {
    title: "No-Code Website Builder",
    category: "Full-Stack Web Application",
    tagline: "Modular drag-and-drop web builder with real-time DOM serialization and instant Netlify CDN publishing.",
    status: "Live Demo",
    description: [
      "Built an intuitive website builder enabling non-technical users to design, style, and publish modern websites without writing code.",
      "Integrated GrapesJS visual editor with custom React.js toolbars and a Node.js/Express backend for DOM JSON tree serialization.",
      "Configured automated static asset bundling for lightning-fast deployments to Netlify Global CDN."
    ],
    technologies: [
      "React.js",
      "GrapesJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    liveDemo: "https://website-builder-2026.netlify.app",
    architectureId: "websitebuilder"
  },
  {
    title: "AI Gen Studio",
    category: "Generative AI & API Backend",
    tagline: "AI marketing content generation backend with dynamic prompt templating and quota enforcement.",
    status: "API on Render",
    description: [
      "Developed backend REST APIs for multi-channel marketing content synthesis, headline generation, and campaign ideation.",
      "Architected modular prompt template factories with exponential backoff error handling for OpenAI API rate limits.",
      "Deployed containerized services to Render with automated environment secret management and health checks."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "OpenAI API",
      "MongoDB",
      "REST APIs",
      "Render Cloud"
    ],
    liveDemo: "https://aigenstudio-server.onrender.com",
    architectureId: "aigenstudio"
  }
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

export const certifications: import("../types/portfolio").Certification[] = [
  {
    id: "nodejs-simplilearn",
    title: "Getting Started with NodeJS",
    issuer: "Simplilearn | SkillUp",
    issueDate: "2024",
    category: "Backend & Runtime",
    credentialType: "pdf",
    credentialPath: "/certificates/nodejs_certi_simplilearn.pdf",
    skills: ["Node.js", "Asynchronous JavaScript", "Event Loop", "NPM Modules", "Backend API Architecture"],
    description: "Verified credential certifying mastery of Node.js event-driven non-blocking runtime, async/await concurrency patterns, file stream pipelines, and backend server development.",
    url: "/certificates/nodejs_certi_simplilearn.pdf"
  },
  {
    id: "expressjs-simplilearn",
    title: "Introduction to Express JS",
    issuer: "Simplilearn | SkillUp",
    issueDate: "2024",
    category: "Web Frameworks & APIs",
    credentialType: "pdf",
    credentialPath: "/certificates/expressjs_certi_simplilearn.pdf",
    skills: ["Express.js", "RESTful Routing", "Middleware Pipelines", "Error Handling", "API Security"],
    description: "Verified credential validating proficiency in Express.js server architecture, custom request/response middleware chains, route parameter handling, and scalable REST API development.",
    url: "/certificates/expressjs_certi_simplilearn.pdf"
  },
  {
    id: "ai-for-india",
    title: "AI For India 2.0",
    issuer: "GUVI & Skill India Digital | NSDC",
    issueDate: "Aug 15, 2023",
    category: "Artificial Intelligence",
    credentialType: "image",
    credentialPath: "/certificates/ai_india_certi.jpg",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Skill India Digital", "AI Fundamentals"],
    description: "Official Certificate of Completion awarded to Sona Pandi for successfully completing the online skilling course on AI For India 2.0 offered by GUVI through Skill India Digital, authorized by the National Skill Development Corporation (NSDC).",
    url: "/certificates/ai_india_certi.jpg"
  },
  {
    id: "spoken-tutorial-iitb",
    title: "Spoken Tutorial Participant",
    issuer: "IIT Bombay | Ministry of Education, Govt. of India",
    issueDate: "2024",
    category: "Academic Recognition",
    credentialType: "pdf",
    credentialPath: "/certificates/spoken_tutorial_iit_bombay.pdf",
    skills: ["Online Learning", "ICT Education", "Technical Training", "Self-Paced Learning"],
    description: "Participant Certificate awarded by the Spoken Tutorial Project at IIT Bombay — a National Mission on Education through ICT initiative funded by the Ministry of Education, Government of India.",
    url: "/certificates/spoken_tutorial_iit_bombay.pdf"
  }
];