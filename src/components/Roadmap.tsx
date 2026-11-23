import { useState, useEffect, useRef } from "react";
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight, FiAward, FiZap, FiCode, FiArrowUpRight } from "react-icons/fi";
import "./Roadmap.css";

interface Stage {
  id: number;
  level: string;
  rank: string;
  title: string;
  subtitle: string;
  period: string;
  quote: string;
  mood: "happy" | "focused" | "excited" | "creative" | "boss";
  badgeEmoji: string;
  themeColor: string;
  skills: string[];
  description: string;
  questLoot: string;
  highlight: string;
  targetAnchor?: string;
}

const stages: Stage[] = [
  {
    id: 1,
    level: "Level 1",
    rank: "Novice Builder",
    title: "The Frontend Haven",
    subtitle: "Pixel Craft & Interactive Canvas",
    period: "Early 2024",
    quote: "“Hello World! Turning blank screens into responsive UI and visual drag-and-drop builders!”",
    mood: "happy",
    badgeEmoji: "🎨",
    themeColor: "#38bdf8",
    skills: ["React.js", "Tailwind CSS", "GrapesJS", "HTML5 & Modern CSS", "DOM Serialization"],
    description: "Started my journey crafting modern web apps. Engineered drag-and-drop builder components with GrapesJS, responsive landing pages, and interactive client-side state at Lithi & Zevotria.",
    questLoot: "Visual Canvas Mastery 🖌️",
    highlight: "Built modular website & email builders with real-time DOM serialization.",
    targetAnchor: "#projects"
  },
  {
    id: 2,
    level: "Level 2",
    rank: "Backend Alchemist",
    title: "The Server Stronghold",
    subtitle: "APIs, Security & Data Engines",
    period: "Mid 2024",
    quote: "“Entering the server room! Non-blocking I/O, secure JWT gates, and database schema design!”",
    mood: "focused",
    badgeEmoji: "⚡",
    themeColor: "#818cf8",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT Auth & RBAC", "RESTful Architecture"],
    description: "Ventured into the core backend realm. Developed scalable REST APIs, role-based access control, cryptographic verification, and optimized MongoDB document indexing.",
    questLoot: "API Architect Seal 🛡️",
    highlight: "Engineered secure backend APIs with strict JWT auth and compound database indexing.",
    targetAnchor: "#architecture"
  },
  {
    id: 3,
    level: "Level 3",
    rank: "Queue Sorcerer",
    title: "Event-Driven Outpost",
    subtitle: "Message Brokers & High Throughput",
    period: "Early 2025",
    quote: "“Queues are running! Buffering bursts of webhooks without dropping a single packet!”",
    mood: "excited",
    badgeEmoji: "📨",
    themeColor: "#10b981",
    skills: ["RabbitMQ", "Redis Caching", "Meta WhatsApp API", "Rate Limiting", "Webhook Security"],
    description: "Tamed massive traffic spikes. Built decoupled asynchronous job systems with RabbitMQ, Redis session caching for sub-millisecond lookups, and token-bucket rate limiters.",
    questLoot: "Burst Shield ⚡",
    highlight: "Engineered sub-50ms webhook acknowledgment pipelines with RabbitMQ buffering.",
    targetAnchor: "#architecture"
  },
  {
    id: 4,
    level: "Level 4",
    rank: "Neural Craftsman",
    title: "Open-Source GenAI Forge",
    subtitle: "ComfyUI HDR & Qwen Models",
    period: "2025",
    quote: "“Local Qwen model booted! Running node-based ComfyUI workflows for ultra-clear HDR frames!”",
    mood: "creative",
    badgeEmoji: "🧪",
    themeColor: "#f59e0b",
    skills: ["ComfyUI", "HDR Resolution Upscaling", "Qwen Open Source", "Seedance 2.5", "Prompt Engineering"],
    description: "Stepped beyond standard APIs into local and specialized generative systems. Built ComfyUI node workflows for multi-pass HDR upscaling and integrated open-source Qwen models for cost-efficient reasoning.",
    questLoot: "HDR Neural Lens 🔮",
    highlight: "Automated high-definition latent upscaling and local LLM script breakdowns.",
    targetAnchor: "#projects"
  },
  {
    id: 5,
    level: "Level 5",
    rank: "Agentic Master (Boss Level)",
    title: "The Autonomous Studio",
    subtitle: "Claude MCP & Kelly Gang Platform",
    period: "Present",
    quote: "“Final Boss unlocked! Connecting Claude with Model Context Protocol (MCP) to direct full movies!”",
    mood: "boss",
    badgeEmoji: "👑",
    themeColor: "#ec4899",
    skills: ["Model Context Protocol (MCP)", "Claude API", "Multi-Agent AI", "Kelly Gang Studio", "System Orchestration"],
    description: "The pinnacle quest! Architected custom Model Context Protocol (MCP) servers allowing Claude to act as an autonomous creative director — coordinating scripts, storyboard frames, audio, and asset databases.",
    questLoot: "Agentic Crown of Kelly Gang 👑",
    highlight: "Autonomous multi-agent filmmaking platform orchestrating LLMs, diffusion, and media stores.",
    targetAnchor: "#projects"
  }
];

function CartoonGirl({
  isWalking,
  facingRight,
  themeColor,
}: {
  isWalking: boolean;
  facingRight: boolean;
  themeColor: string;
}) {
  return (
    <div className={`cartoon-girl-figure ${isWalking ? "walking" : "idle"} ${facingRight ? "facing-right" : "facing-left"}`}>
      <svg
        className="cartoon-girl-svg"
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="girlHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b2e" />
            <stop offset="100%" stopColor="#0f0e17" />
          </linearGradient>
          <linearGradient id="girlHoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id="girlGlowAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={themeColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft Ground Shadow on the road */}
        <ellipse cx="50" cy="122" rx="22" ry="5" fill="rgba(0, 0, 0, 0.45)" className="girl-ground-shadow" />

        {/* Ambient Tech Aura */}
        <circle cx="50" cy="65" r="48" fill="url(#girlGlowAura)" className="girl-aura" />

        {/* Dust / Energy Sparkles when walking */}
        {isWalking && (
          <g className="girl-walk-dust">
            <circle cx="28" cy="118" r="3.5" fill="#facc15" className="dust-puff dust-1" />
            <circle cx="20" cy="120" r="2.5" fill={themeColor} className="dust-puff dust-2" />
            <circle cx="14" cy="122" r="1.5" fill="#ffffff" className="dust-puff dust-3" />
          </g>
        )}

        {/* Back Ponytail (swings while walking!) */}
        <g className="girl-ponytail-group">
          <path
            d="M 32 32 C 16 16 6 34 4 48 C 12 50 20 44 28 38 Z"
            fill="url(#girlHairGrad)"
            stroke="#09090b"
            strokeWidth="1.5"
            className="girl-ponytail-path"
          />
          {/* Cute Hair Tie / Ribbon */}
          <ellipse cx="30" cy="32" rx="4" ry="5" fill={themeColor} />
          <circle cx="30" cy="32" r="2" fill="#ffffff" />
        </g>

        {/* Legs & Sneakers */}
        <g className="girl-legs-group">
          {/* Left Leg */}
          <g className={`girl-leg girl-leg-left ${isWalking ? "leg-anim-left" : ""}`}>
            <rect x="38" y="78" width="8" height="18" rx="4" fill="#334155" />
            <rect x="39" y="93" width="6" height="15" rx="3" fill="#fed7aa" />
            <rect x="39" y="104" width="6" height="5" fill="#ffffff" />
            {/* Left Sneaker */}
            <path
              d="M 35 110 L 49 110 C 51 110 52 114 49 117 L 33 117 C 32 117 32 110 35 110 Z"
              fill="#ffffff"
              stroke={themeColor}
              strokeWidth="1.5"
            />
            <line x1="38" y1="113" x2="44" y2="113" stroke={themeColor} strokeWidth="1.5" />
          </g>

          {/* Right Leg */}
          <g className={`girl-leg girl-leg-right ${isWalking ? "leg-anim-right" : ""}`}>
            <rect x="49" y="78" width="8" height="18" rx="4" fill="#1e293b" />
            <rect x="50" y="93" width="6" height="15" rx="3" fill="#fed7aa" />
            <rect x="50" y="104" width="6" height="5" fill="#ffffff" />
            {/* Right Sneaker */}
            <path
              d="M 46 110 L 60 110 C 62 110 63 114 60 117 L 44 117 C 43 117 43 110 46 110 Z"
              fill="#ffffff"
              stroke={themeColor}
              strokeWidth="1.5"
            />
            <line x1="49" y1="113" x2="55" y2="113" stroke={themeColor} strokeWidth="1.5" />
          </g>
        </g>

        {/* Torso & Tech Hoodie */}
        <g className="girl-torso-group">
          <path
            d="M 32 50 C 32 44 64 44 64 50 L 68 78 C 68 81 64 83 60 83 L 36 83 C 32 83 28 81 28 78 Z"
            fill="url(#girlHoodieGrad)"
            stroke="#475569"
            strokeWidth="2"
          />
          {/* Zipper / Accent Line */}
          <line x1="48" y1="52" x2="48" y2="81" stroke="#334155" strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Glowing AI Dev Badge on chest */}
          <rect x="52" y="56" width="8" height="6" rx="2" fill="#0f172a" stroke={themeColor} strokeWidth="1" />
          <circle cx="56" cy="59" r="1.5" fill={themeColor} />
          {/* Front Pocket */}
          <path d="M 37 68 L 59 68 L 56 78 L 40 78 Z" fill="#0f172a" opacity="0.5" />
        </g>

        {/* Left Arm holding glowing mini-laptop */}
        <g className="girl-left-arm">
          <path d="M 32 54 L 24 66 L 36 72" stroke="#fed7aa" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Laptop Base */}
          <rect x="18" y="66" width="18" height="13" rx="2.5" fill="#0f172a" stroke={themeColor} strokeWidth="1.5" />
          {/* Glowing Screen */}
          <rect x="20" y="68" width="14" height="9" rx="1.5" fill="#0369a1" />
          <line x1="22" y1="71" x2="30" y2="71" stroke="#38bdf8" strokeWidth="1" />
          <line x1="22" y1="74" x2="28" y2="74" stroke="#38bdf8" strokeWidth="1" />
        </g>

        {/* Right Arm swinging naturally */}
        <g className={`girl-right-arm ${isWalking ? "arm-anim-right" : ""}`}>
          <path d="M 64 54 Q 74 66 68 76" stroke="#fed7aa" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          {/* Hand */}
          <circle cx="67" cy="77" r="3.5" fill="#fed7aa" />
        </g>

        {/* Head & Neck */}
        <g className="girl-head-group">
          {/* Neck */}
          <rect x="44" y="44" width="8" height="9" rx="3" fill="#fdba74" />

          {/* Cute Face */}
          <ellipse cx="48" cy="33" rx="18" ry="19" fill="#fed7aa" />

          {/* Cheerful Blush Marks */}
          <ellipse cx="37" cy="39" rx="3.5" ry="2" fill="#f43f5e" opacity="0.65" />
          <ellipse cx="59" cy="39" rx="3.5" ry="2" fill="#f43f5e" opacity="0.65" />

          {/* Expressive Anime Cartoon Eyes */}
          <g className="girl-eyes">
            {/* Left Eye */}
            <ellipse cx="40" cy="31" rx="3.8" ry="5.5" fill="#0f172a" className="girl-eye" />
            <circle cx="41.2" cy="29" r="1.8" fill="#ffffff" />
            <circle cx="39.2" cy="33" r="0.8" fill={themeColor} />
            {/* Left Brow */}
            <path d="M 36 24 Q 40 22 44 24" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Right Eye */}
            <ellipse cx="56" cy="31" rx="3.8" ry="5.5" fill="#0f172a" className="girl-eye" />
            <circle cx="57.2" cy="29" r="1.8" fill="#ffffff" />
            <circle cx="55.2" cy="33" r="0.8" fill={themeColor} />
            {/* Right Brow */}
            <path d="M 52 24 Q 56 22 60 24" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Cute Smile */}
          <path d="M 45 40 Q 48 44 51 40" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Front Hair Bangs framing the face */}
          <path
            d="M 28 32 C 28 16 68 16 68 32 C 68 35 64 45 62 47 C 60 42 60 33 58 31 C 52 35 44 35 38 31 C 36 34 36 43 34 47 C 32 44 28 35 28 32 Z"
            fill="url(#girlHairGrad)"
          />

          {/* Gamer / Developer Headphones */}
          <g className="girl-headphones">
            {/* Headband arch */}
            <path d="M 30 24 A 18 16 0 0 1 66 24" stroke="#334155" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Left Ear cup */}
            <rect x="25" y="24" width="7" height="15" rx="3.5" fill="#1e293b" stroke={themeColor} strokeWidth="1.5" />
            <circle cx="28.5" cy="31.5" r="2" fill={themeColor} />
            {/* Right Ear cup */}
            <rect x="64" y="24" width="7" height="15" rx="3.5" fill="#1e293b" stroke={themeColor} strokeWidth="1.5" />
            <circle cx="67.5" cy="31.5" r="2" fill={themeColor} />
          </g>
        </g>
      </svg>
    </div>
  );
}

const girlPositions = [10, 30, 50, 70, 90];

export default function Roadmap() {
  const [activeIdx, setActiveIdx] = useState(4); // Default to current Boss level (Level 5)
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [facingRight, setFacingRight] = useState(true);
  const timerRef = useRef<number | null>(null);
  const walkTimeoutRef = useRef<number | null>(null);

  const currentStage = stages[activeIdx];

  const triggerMove = (targetIdx: number) => {
    if (targetIdx === activeIdx) return;
    setFacingRight(targetIdx >= activeIdx);
    setIsWalking(true);
    setActiveIdx(targetIdx);

    if (walkTimeoutRef.current) clearTimeout(walkTimeoutRef.current);
    walkTimeoutRef.current = window.setTimeout(() => {
      setIsWalking(false);
    }, 1100);
  };

  // Auto-play / Quest runner loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setActiveIdx((current) => {
          const next = (current + 1) % stages.length;
          setFacingRight(next >= current);
          setIsWalking(true);
          if (walkTimeoutRef.current) clearTimeout(walkTimeoutRef.current);
          walkTimeoutRef.current = window.setTimeout(() => {
            setIsWalking(false);
          }, 1100);
          return next;
        });
      }, 4500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (walkTimeoutRef.current) clearTimeout(walkTimeoutRef.current);
    };
  }, [isPlaying]);

  const handleSelectStage = (idx: number) => {
    setIsPlaying(false);
    triggerMove(idx);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    const prev = activeIdx > 0 ? activeIdx - 1 : stages.length - 1;
    triggerMove(prev);
  };

  const handleNext = () => {
    setIsPlaying(false);
    const next = (activeIdx + 1) % stages.length;
    triggerMove(next);
  };

  return (
    <section className="roadmap-section" id="roadmap">
      {/* Cartoon Background Elements (Passing Clouds & Floating Stars) */}
      <div className="roadmap-bg-particles" aria-hidden="true">
        <span className="floating-star star-1">✨</span>
        <span className="floating-star star-2">⭐</span>
        <span className="floating-star star-3">✨</span>
        <span className="floating-star star-4">⭐</span>
        <span className="floating-cloud cloud-1">☁️</span>
        <span className="floating-cloud cloud-2">☁️</span>
        <span className="floating-cloud cloud-3">☁️</span>
      </div>

      <div className="roadmap-header">
        <div className="roadmap-badge-pill">
          <span className="pulse-star">⭐</span>
          <span>Interactive Career Journey</span>
        </div>
        <h2 className="section-title roadmap-title">
          The Developer <span className="gradient-text">Adventure</span>
        </h2>
        <p className="section-subtitle roadmap-subtitle">
          From crafting frontend pixels to orchestrating open-source models & autonomous AI film studios.
          Click any level checkpoint or hit <strong>Auto-Play</strong> to embark on the quest!
        </p>
      </div>

      {/* Quest Control Center */}
      <div className="roadmap-hud">
        <div className="hud-status">
          <span className="hud-dot" style={{ background: currentStage.themeColor }} />
          <span className="hud-level-text">
            <strong>{currentStage.level}</strong>: {currentStage.rank}
          </span>
          <span className="hud-period-badge">{currentStage.period}</span>
        </div>

        <div className="hud-controls">
          <button
            className={`hud-btn hud-play-btn ${isPlaying ? "playing" : ""}`}
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause Quest" : "Auto-Play Quest"}
          >
            {isPlaying ? (
              <>
                <FiPause /> Pause Quest
              </>
            ) : (
              <>
                <FiPlay /> Auto-Play Quest
              </>
            )}
          </button>

          <div className="hud-steppers">
            <button className="hud-step-btn" onClick={handlePrev} title="Previous Level">
              <FiChevronLeft />
            </button>
            <button className="hud-step-btn" onClick={handleNext} title="Next Level">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Map with Cartoon Girl on the Road */}
      <div className="roadmap-canvas">
        {/* Winding Cartoon Road & Checkpoint Islands */}
        <div className="roadmap-path-container">
          {/* Animated SVG Path for the Road */}
          <svg className="roadmap-path-svg" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
            <path
              d="M 50 60 Q 250 15, 500 60 T 950 60"
              className="road-track-bg"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M 50 60 Q 250 15, 500 60 T 950 60"
              className="road-track-active"
              stroke={`url(#roadGrad-${activeIdx})`}
              strokeWidth="6"
              strokeDasharray="10 12"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={`roadGrad-${activeIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* CARTOON GIRL DEVELOPER WALKING ALONG THE ROAD */}
          <div
            className="cartoon-girl-walker"
            style={{
              left: `${girlPositions[activeIdx]}%`,
            }}
          >
            {/* Animated Speech Bubble Travelling Above the Girl's Head */}
            <div
              key={activeIdx}
              className={`girl-speech-bubble bubble-pos-${activeIdx}`}
              style={{ borderColor: currentStage.themeColor }}
            >
              <div className="bubble-speaker">
                <span className="speaker-name">👩‍💻 Sona • {currentStage.level}</span>
                <span
                  className="speaker-tag"
                  style={{ background: `${currentStage.themeColor}25`, color: currentStage.themeColor }}
                >
                  {currentStage.rank}
                </span>
              </div>
              <p className="bubble-text">{currentStage.quote}</p>
              <div className="bubble-tail" style={{ borderTopColor: currentStage.themeColor }} />
            </div>

            <CartoonGirl
              isWalking={isWalking}
              facingRight={facingRight}
              themeColor={currentStage.themeColor}
            />
          </div>

          {/* Interactive Checkpoints along the road */}
          <div className="roadmap-checkpoints">
            {stages.map((stage, idx) => {
              const isSelected = activeIdx === idx;
              const isPast = activeIdx > idx;

              return (
                <button
                  key={stage.id}
                  className={`checkpoint-node ${isSelected ? "selected" : ""} ${isPast ? "passed" : ""}`}
                  onClick={() => handleSelectStage(idx)}
                  style={
                    {
                      "--node-color": stage.themeColor,
                    } as React.CSSProperties
                  }
                  aria-label={`${stage.level}: ${stage.title}`}
                >
                  <div className="checkpoint-island">
                    <span className="checkpoint-emoji">{stage.badgeEmoji}</span>
                    {isSelected && <span className="checkpoint-pin-glow" />}
                  </div>

                  <div className="checkpoint-label">
                    <span className="checkpoint-level-tag">{stage.level}</span>
                    <span className="checkpoint-title-text">{stage.title}</span>
                  </div>

                  {idx === stages.length - 1 && (
                    <span className="checkpoint-boss-tag">BOSS</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Quest Log Card */}
        <div className="stage-quest-card" style={{ borderColor: `${currentStage.themeColor}55` }}>
          <div className="quest-card-header">
            <div className="quest-meta">
              <span className="quest-badge-emoji">{currentStage.badgeEmoji}</span>
              <div>
                <div className="quest-rank-row">
                  <span className="quest-rank-tag" style={{ color: currentStage.themeColor }}>
                    {currentStage.rank}
                  </span>
                  <span className="quest-period">• {currentStage.period}</span>
                </div>
                <h3 className="quest-title">{currentStage.title}</h3>
                <p className="quest-subtitle">{currentStage.subtitle}</p>
              </div>
            </div>

            <div className="quest-loot-box">
              <div className="loot-icon">
                <FiAward />
              </div>
              <div>
                <span className="loot-label">Loot Unlocked</span>
                <span className="loot-name">{currentStage.questLoot}</span>
              </div>
            </div>
          </div>

          <p className="quest-description">{currentStage.description}</p>

          {/* Achievement Box */}
          <div className="quest-highlight-box">
            <div className="highlight-icon">
              <FiZap />
            </div>
            <div className="highlight-text">
              <strong>Key Milestone: </strong>
              <span>{currentStage.highlight}</span>
            </div>
          </div>

          {/* Skills / Tech Loot */}
          <div className="quest-skills-shelf">
            <span className="skills-shelf-title">
              <FiCode /> Technologies Mastered in this Level:
            </span>
            <div className="quest-skill-pills">
              {currentStage.skills.map((skill) => (
                <span
                  key={skill}
                  className="quest-skill-pill"
                  style={{
                    borderColor: `${currentStage.themeColor}40`,
                    background: `${currentStage.themeColor}15`,
                    color: currentStage.themeColor,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Jump Action */}
          {currentStage.targetAnchor && (
            <div className="quest-footer">
              <a href={currentStage.targetAnchor} className="quest-explore-btn">
                <span>Inspect in {currentStage.targetAnchor === "#architecture" ? "Architecture" : "Projects"}</span>
                <FiArrowUpRight />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
