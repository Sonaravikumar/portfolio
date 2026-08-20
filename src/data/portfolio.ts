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
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript"
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "RabbitMQ",
      "REST APIs",
      "Rate Limited APIs"
    ]
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Redis",
      "SQL"
    ]
  },

  {
    title: "Integrations",
    skills: [
      "OpenAI API",
      "WhatsApp API",
      "Razorpay"
    ]
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "Postman",
      "VS Code"
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
    description:[
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
    description:[
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
    description:[
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