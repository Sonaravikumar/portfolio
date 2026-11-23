import React, { useState } from "react";

interface ProjectDispatcherProps {
  activeFilter: string;
  onFilterChange: (category: string) => void;
  categories: string[];
}

const filterVoiceLines: Record<string, { quote: string; mood: string; icon: string }> = {
  "All Projects": {
    quote: "All 5 production systems online! Pick any blueprint below to inspect full architectures!",
    mood: "✨ Ready for Inspection",
    icon: "🚀"
  },
  "AI & Automation": {
    quote: "Neural pipelines booted! Open-source Qwen models, ComfyUI HDR nodes, and Claude MCP active!",
    mood: "🧠 GenAI Workflows Active",
    icon: "⚡"
  }
};

export const ProjectDispatcher: React.FC<ProjectDispatcherProps> = ({
  activeFilter,
  onFilterChange,
  categories
}) => {
  const [isCelebration, setIsCelebration] = useState(false);

  const currentDialogue = filterVoiceLines[activeFilter] || filterVoiceLines["All"] || filterVoiceLines["All Projects"];

  const handleTurboClick = () => {
    setIsCelebration(true);
    setTimeout(() => setIsCelebration(false), 2400);
  };

  return (
    <div className={`project-dispatcher-deck ${isCelebration ? "dispatcher-celebrating" : ""}`}>
      {/* Top Status Header */}
      <div className="dispatcher-top-bar">
        <div className="dispatcher-live-status">
          <span className="live-radar-dot"></span>
          <span className="live-status-text">PROJECT COMMAND LAB // SECTOR: {activeFilter.toUpperCase()}</span>
        </div>
        <button
          type="button"
          className="dispatcher-turbo-btn"
          onClick={handleTurboClick}
          title="Trigger Dev Cheer"
        >
          <span>🎉</span> Dev Cheer!
        </button>
      </div>

      <div className="dispatcher-stage">
        {/* Left: Cartoon Anime Developer Girl at Hologram Desk */}
        <div className="dispatcher-avatar-zone" aria-hidden="true">
          <svg className="dispatcher-girl-svg" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dispGirlHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="dispHoloScreen" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Hair Back */}
            <path d="M 28 20 C 12 28 8 50 14 68 C 18 64 24 60 28 54 Z" fill="#18181b" />
            <circle cx="20" cy="38" r="5" fill="#38bdf8" />

            {/* Torso & Hoodie */}
            <path d="M 30 54 C 30 46 64 46 64 54 L 68 84 L 26 84 Z" fill="url(#dispGirlHoodie)" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="47" cy="62" r="3" fill="#38bdf8" />

            {/* Arms Typing on Hologram Keyboard */}
            <path d="M 32 60 L 46 72 L 56 68" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" className="typing-arm left" />
            <path d="M 62 60 L 52 72 L 44 68" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" className="typing-arm right" />

            {/* Head & Face */}
            <rect x="42" y="44" width="10" height="10" rx="3" fill="#fdba74" />
            <ellipse cx="47" cy="32" rx="17" ry="18" fill="#fed7aa" />
            {/* Blushes */}
            <ellipse cx="37" cy="38" rx="3" ry="1.8" fill="#f43f5e" opacity="0.6" />
            <ellipse cx="57" cy="38" rx="3" ry="1.8" fill="#f43f5e" opacity="0.6" />

            {/* Anime Eyes */}
            <ellipse cx="40" cy="30" rx="3.5" ry="5" fill="#0f172a" />
            <circle cx="41" cy="28" r="1.5" fill="#ffffff" />
            <circle cx="39" cy="32" r="0.7" fill="#38bdf8" />
            <ellipse cx="54" cy="30" rx="3.5" ry="5" fill="#0f172a" />
            <circle cx="55" cy="28" r="1.5" fill="#ffffff" />
            <circle cx="53" cy="32" r="0.7" fill="#38bdf8" />

            {/* Cheerful Smile */}
            <path d="M 44 38 Q 47 42 50 38" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Hair Front & Bangs */}
            <path d="M 30 24 Q 47 16 64 24 Q 56 30 50 28 Q 40 32 30 24 Z" fill="#18181b" />

            {/* Tech Headphones */}
            <path d="M 28 32 C 28 14 66 14 66 32" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <rect x="25" y="28" width="6" height="12" rx="3" fill="#38bdf8" />
            <rect x="63" y="28" width="6" height="12" rx="3" fill="#38bdf8" />

            {/* Hologram Terminal Desk Screen */}
            <polygon points="30,86 64,86 70,72 24,72" fill="url(#dispHoloScreen)" stroke="#38bdf8" strokeWidth="1" className="holo-keyboard" />
            <line x1="32" y1="76" x2="62" y2="76" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="28" y1="81" x2="66" y2="81" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Center-Left: Flying Companion Robot Drone 'Byte' */}
        <div className="dispatcher-drone-zone" aria-hidden="true">
          <div className="companion-drone">
            {/* Spinning Rotor Blades */}
            <div className="drone-rotor"></div>
            {/* Drone Head / Body */}
            <div className="drone-body">
              <span className="drone-visor">( ^ _ ^ )</span>
            </div>
            {/* Mini Thruster glow */}
            <div className="drone-thruster"></div>
          </div>
        </div>

        {/* Right: Dynamic Cartoon Speech Bubble */}
        <div className="dispatcher-speech-bubble">
          <div className="speech-mood-badge">
            <span className="mood-icon">{currentDialogue.icon}</span>
            <span className="mood-title">{currentDialogue.mood}</span>
          </div>
          <p className="speech-quote" key={activeFilter}>
            “{currentDialogue.quote}”
          </p>
        </div>
      </div>

      {/* Filter Tabs embedded right into the Dispatcher Console */}
      <div className="project-filters dispatcher-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`project-filter-btn ${activeFilter === category ? "active" : ""}`}
            onClick={() => onFilterChange(category)}
          >
            {(category === "All Projects") && "🌐 "}
            {(category === "AI & Automation") && "🤖 "}
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectDispatcher;
