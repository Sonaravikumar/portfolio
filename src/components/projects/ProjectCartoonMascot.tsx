import React from "react";

interface ProjectCartoonMascotProps {
  architectureId?: string;
  title: string;
}

export const ProjectCartoonMascot: React.FC<ProjectCartoonMascotProps> = ({
  architectureId,
  title,
}) => {
  // 1. Kelly Gang: Cartoon AI Movie Studio & Clapperboard
  if (architectureId === "kellygang" || title.toLowerCase().includes("kelly")) {
    return (
      <div className="cartoon-mascot-card mascot-kellygang" aria-label="AI Movie Studio Mascot">
        <div className="mascot-film-strip-top" aria-hidden="true"></div>
        
        {/* Rec Indicator */}
        <div className="mascot-rec-badge" aria-hidden="true">
          <span className="rec-dot"></span>
          <span className="rec-text">REC 4K HDR</span>
        </div>

        <svg className="mascot-svg" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="kgCameraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="kgReelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="kgSpotlightGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Spotlight beam */}
          <polygon points="62,48 160,20 160,76" fill="url(#kgSpotlightGrad)" className="camera-spotlight-beam" />

          {/* Tripod */}
          <line x1="42" y1="58" x2="22" y2="85" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="58" x2="42" y2="85" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="58" x2="62" y2="85" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

          {/* Camera Body */}
          <rect x="22" y="36" width="40" height="26" rx="6" fill="url(#kgCameraGrad)" stroke="#0284c7" strokeWidth="1.5" className="movie-camera-body" />
          {/* Lens */}
          <path d="M 62 43 L 74 38 L 74 58 L 62 53 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="74" cy="48" r="4" fill="#38bdf8" opacity="0.8" />

          {/* Film Reels on top */}
          <g className="film-reel-left">
            <circle cx="28" cy="24" r="11" fill="url(#kgReelGrad)" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="28" cy="24" r="3" fill="#0f172a" />
            <circle cx="24" cy="21" r="1.5" fill="#f8fafc" />
            <circle cx="32" cy="27" r="1.5" fill="#f8fafc" />
          </g>

          <g className="film-reel-right">
            <circle cx="48" cy="22" r="13" fill="url(#kgReelGrad)" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="48" cy="22" r="3.5" fill="#0f172a" />
            <circle cx="44" cy="18" r="1.5" fill="#f8fafc" />
            <circle cx="52" cy="26" r="1.5" fill="#f8fafc" />
          </g>

          {/* Clapperboard on Right */}
          <g className="cartoon-clapperboard">
            {/* Base */}
            <rect x="130" y="38" width="48" height="34" rx="4" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="136" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">SCENE 1</text>
            <text x="136" y="63" fill="#fde047" fontSize="7" fontWeight="bold" fontFamily="monospace">TAKE: AI</text>

            {/* Clapper Arm (Snaps down on hover) */}
            <g className="clapper-top-arm">
              <rect x="127" y="27" width="52" height="10" rx="3" fill="#09090b" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* Stripes */}
              <polygon points="135,27 141,27 137,37 131,37" fill="#fde047" />
              <polygon points="147,27 153,27 149,37 143,37" fill="#fde047" />
              <polygon points="159,27 165,27 161,37 155,37" fill="#fde047" />
              <polygon points="171,27 177,27 173,37 167,37" fill="#fde047" />
            </g>
          </g>

          {/* Floating Director Megaphone & Stars */}
          <text x="190" y="35" fontSize="16" className="floating-prop prop-1">🎬</text>
          <text x="96" y="24" fontSize="13" className="floating-prop prop-2">✨</text>
          <text x="185" y="70" fontSize="14" className="floating-prop prop-3">🍿</text>
        </svg>

        <div className="mascot-film-strip-bottom" aria-hidden="true"></div>
      </div>
    );
  }

  // 2. CareerPro AI: Cartoon AI Career Robot & Holographic Resume
  if (architectureId === "careerpro" || title.toLowerCase().includes("career")) {
    return (
      <div className="cartoon-mascot-card mascot-careerpro" aria-label="AI Career Robot Mascot">
        <div className="mascot-matrix-bg" aria-hidden="true"></div>
        
        <svg className="mascot-svg" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="holoDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Pulsing Neural Waves from Antenna */}
          <circle cx="58" cy="14" r="6" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" className="antenna-wave wave-1" />
          <circle cx="58" cy="14" r="11" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" className="antenna-wave wave-2" />

          {/* Robot Antenna */}
          <line x1="58" y1="20" x2="58" y2="30" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="58" cy="18" r="3" fill="#38bdf8" className="antenna-bulb" />

          {/* Robot Head */}
          <rect x="36" y="30" width="44" height="38" rx="10" fill="url(#robotBodyGrad)" stroke="#38bdf8" strokeWidth="2" className="robot-head" />
          {/* Ear Bolts */}
          <rect x="31" y="42" width="5" height="12" rx="2" fill="#64748b" />
          <rect x="80" y="42" width="5" height="12" rx="2" fill="#64748b" />

          {/* Digital Screen Visor */}
          <rect x="42" y="37" width="32" height="18" rx="6" fill="#090d16" stroke="#0284c7" strokeWidth="1" />
          {/* Glowing Eyes */}
          <g className="robot-eyes">
            <ellipse cx="50" cy="46" rx="4" ry="4.5" fill="#38bdf8" className="robot-eye" />
            <circle cx="51.5" cy="44.5" r="1.5" fill="#ffffff" />
            <ellipse cx="66" cy="46" rx="4" ry="4.5" fill="#38bdf8" className="robot-eye" />
            <circle cx="67.5" cy="44.5" r="1.5" fill="#ffffff" />
          </g>
          {/* Cute digital smile */}
          <path d="M 52 51 Q 58 54 64 51" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Robot Bowtie */}
          <polygon points="53,68 63,68 58,72" fill="#f43f5e" />
          <polygon points="53,76 63,76 58,72" fill="#f43f5e" />
          <circle cx="58" cy="72" r="1.5" fill="#ffffff" />

          {/* Holographic Resume Document */}
          <g className="holo-resume-doc">
            <rect x="110" y="16" width="52" height="62" rx="5" fill="url(#holoDocGrad)" stroke="#10b981" strokeWidth="1.5" />
            {/* Header bar */}
            <rect x="116" y="23" width="22" height="4" rx="2" fill="#10b981" />
            <circle cx="154" cy="25" r="4" fill="#10b981" opacity="0.8" />
            {/* Resume lines */}
            <line x1="116" y1="33" x2="154" y2="33" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" className="doc-line line-1" />
            <line x1="116" y1="41" x2="148" y2="41" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" className="doc-line line-2" />
            <line x1="116" y1="49" x2="152" y2="49" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" className="doc-line line-3" />
            <line x1="116" y1="57" x2="140" y2="57" stroke="#10b981" strokeWidth="2" strokeLinecap="round" className="doc-line line-4" />
            {/* Verified Stamp */}
            <circle cx="146" cy="65" r="7" fill="#10b981" opacity="0.3" />
            <text x="142" y="68" fill="#10b981" fontSize="9" fontWeight="bold">✓</text>
          </g>

          {/* Floating Career Badges */}
          <text x="176" y="32" fontSize="15" className="floating-prop prop-1">💼</text>
          <text x="175" y="66" fontSize="14" className="floating-prop prop-2">⭐</text>
          <text x="96" y="24" fontSize="12" className="floating-prop prop-3">🤖</text>
        </svg>
      </div>
    );
  }

  // 3. Inderact WhatsApp Automation: Cartoon RabbitMQ Rocket Courier
  if (architectureId === "inderact" || title.toLowerCase().includes("whatsapp")) {
    return (
      <div className="cartoon-mascot-card mascot-inderact" aria-label="WhatsApp Rocket Courier Mascot">
        <svg className="mascot-svg" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="rocketFlameGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          {/* Speed Dust / Cloud Trails */}
          <ellipse cx="26" cy="46" rx="10" ry="6" fill="#1e293b" opacity="0.6" className="exhaust-cloud c-1" />
          <ellipse cx="14" cy="50" rx="7" ry="4" fill="#334155" opacity="0.4" className="exhaust-cloud c-2" />

          {/* Rocket Thruster Flame */}
          <polygon points="46,46 22,41 28,46 22,51" fill="url(#rocketFlameGrad)" className="rocket-flame" />

          {/* Rocket Group */}
          <g className="cartoon-rocket">
            {/* Fins */}
            <polygon points="48,34 38,24 38,36" fill="#f43f5e" />
            <polygon points="48,58 38,68 38,56" fill="#f43f5e" />
            {/* Rocket Hull */}
            <path d="M 44 38 L 86 38 Q 106 46 86 54 L 44 54 Z" fill="url(#rocketBodyGrad)" stroke="#047857" strokeWidth="1.5" />
            {/* Porthole */}
            <circle cx="70" cy="46" r="6" fill="#090d16" stroke="#f8fafc" strokeWidth="1.5" />
            <text x="66" y="50" fontSize="9">🐇</text>
            {/* Rocket Nosecone */}
            <path d="M 86 38 Q 106 46 86 54 Z" fill="#f43f5e" />
          </g>

          {/* Flying Chat / Message Bubbles */}
          <g className="flying-chat-bubble bubble-1">
            <rect x="120" y="16" width="56" height="24" rx="8" fill="#10b981" stroke="#047857" strokeWidth="1" />
            <text x="126" y="32" fill="#ffffff" fontSize="9" fontWeight="bold">Auto-Reply</text>
            <text x="162" y="32" fill="#fde047" fontSize="8">✓✓</text>
          </g>

          <g className="flying-chat-bubble bubble-2">
            <rect x="140" y="48" width="52" height="24" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
            <text x="146" y="64" fill="#38bdf8" fontSize="9" fontWeight="bold">Queue: OK</text>
            <text x="180" y="64" fill="#10b981" fontSize="8">⚡</text>
          </g>

          {/* Little message icons */}
          <text x="110" y="68" fontSize="14" className="floating-prop prop-1">✉️</text>
          <text x="186" y="36" fontSize="15" className="floating-prop prop-2">💬</text>
        </svg>
      </div>
    );
  }

  // 4. No-Code Website Builder: Cartoon Web Constructor & Crane
  if (architectureId === "websitebuilder" || title.toLowerCase().includes("website") || title.toLowerCase().includes("builder")) {
    return (
      <div className="cartoon-mascot-card mascot-builder" aria-label="Web Builder Crane Mascot">
        <div className="mascot-blueprint-grid" aria-hidden="true"></div>
        
        <svg className="mascot-svg" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="craneYellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Crane Tower */}
          <line x1="28" y1="85" x2="28" y2="22" stroke="#f59e0b" strokeWidth="3" />
          <line x1="38" y1="85" x2="38" y2="22" stroke="#f59e0b" strokeWidth="3" />
          <line x1="28" y1="40" x2="38" y2="30" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="28" y1="55" x2="38" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="28" y1="70" x2="38" y2="60" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Crane Jib Arm (swinging) */}
          <g className="crane-jib-arm">
            <line x1="16" y1="22" x2="108" y2="22" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
            {/* Counterweight */}
            <rect x="14" y="17" width="10" height="10" fill="#334155" />
            {/* Cable & Trolley */}
            <circle cx="84" cy="22" r="3" fill="#0f172a" />
            <line x1="84" y1="22" x2="84" y2="44" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="2 1" />
            {/* Hook */}
            <path d="M 84 44 C 84 48 80 48 80 46" stroke="#94a3b8" strokeWidth="2" fill="none" />

            {/* Dropping Component Block */}
            <g className="crane-carried-block">
              <rect x="66" y="48" width="36" height="16" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              <text x="70" y="60" fill="#0f172a" fontSize="8" fontWeight="bold">&lt;Hero /&gt;</text>
            </g>
          </g>

          {/* Constructor Beaver / Character with Hardhat */}
          <g className="cartoon-builder-bot">
            {/* Body */}
            <circle cx="150" cy="56" r="16" fill="#f97316" />
            {/* Hardhat */}
            <path d="M 136 46 Q 150 36 164 46 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
            <line x1="133" y1="46" x2="167" y2="46" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
            {/* Face */}
            <circle cx="145" cy="52" r="2" fill="#0f172a" />
            <circle cx="155" cy="52" r="2" fill="#0f172a" />
            <path d="M 148 57 Q 150 59 152 57" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Tool */}
            <text x="166" y="62" fontSize="13" className="spinning-wrench">🔧</text>
          </g>

          {/* Assembled Blocks Stack */}
          <rect x="180" y="58" width="28" height="14" rx="3" fill="#818cf8" stroke="#4f46e5" strokeWidth="1" />
          <text x="184" y="68" fill="#ffffff" fontSize="7" fontWeight="bold">Button</text>

          <rect x="182" y="42" width="24" height="13" rx="3" fill="#f43f5e" stroke="#e11d48" strokeWidth="1" />
          <text x="186" y="51" fill="#ffffff" fontSize="7" fontWeight="bold">Card</text>

          {/* Floating UI props */}
          <text x="122" y="32" fontSize="13" className="floating-prop prop-1">🎨</text>
          <text x="194" y="30" fontSize="12" className="floating-prop prop-2">✨</text>
        </svg>
      </div>
    );
  }

  // 5. AI Gen Studio: Cartoon Prompt Alchemy & Cyber Cauldron
  return (
    <div className="cartoon-mascot-card mascot-aigenstudio" aria-label="AI Prompt Alchemy Mascot">
      <svg className="mascot-svg" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flaskLiquidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        {/* Alchemy Flask */}
        <g className="alchemy-flask-group">
          {/* Glass Flask Body */}
          <path
            d="M 52 26 L 52 38 L 34 66 C 30 72 35 80 44 80 L 76 80 C 85 80 90 72 86 66 L 68 38 L 68 26 Z"
            fill="rgba(15, 23, 42, 0.7)"
            stroke="#a855f7"
            strokeWidth="2"
          />
          {/* Flask Rim */}
          <rect x="49" y="23" width="22" height="4" rx="2" fill="#c084fc" />

          {/* Bubbling Glowing Liquid */}
          <path
            d="M 37 66 C 45 63 55 68 65 64 C 75 60 81 65 83 66 C 85 71 83 78 76 78 L 44 78 C 37 78 35 71 37 66 Z"
            fill="url(#flaskLiquidGrad)"
            className="bubbling-liquid"
          />

          {/* Rising bubbles */}
          <circle cx="50" cy="58" r="2.5" fill="#ffffff" opacity="0.8" className="liquid-bubble b-1" />
          <circle cx="68" cy="52" r="3.5" fill="#ffffff" opacity="0.8" className="liquid-bubble b-2" />
          <circle cx="58" cy="42" r="2" fill="#38bdf8" opacity="0.9" className="liquid-bubble b-3" />
        </g>

        {/* Floating AI Neural Spark */}
        <g className="floating-neural-core">
          <circle cx="140" cy="46" r="22" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" className="neural-core-circle" />
          <text x="129" y="54" fontSize="18">🧠</text>
          {/* Orbiting particles */}
          <circle cx="140" cy="18" r="3" fill="#38bdf8" className="orbit-particle p-1" />
          <circle cx="166" cy="54" r="3" fill="#f43f5e" className="orbit-particle p-2" />
          <circle cx="120" cy="62" r="2.5" fill="#facc15" className="orbit-particle p-3" />
        </g>

        {/* Glowing Prompt Banner */}
        <g className="prompt-chip">
          <rect x="168" y="24" width="46" height="18" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="1" />
          <text x="173" y="36" fill="#34d399" fontSize="8" fontWeight="bold">PROMPT: 100%</text>
        </g>

        {/* Floating Sparks & Lighting */}
        <text x="96" y="32" fontSize="15" className="floating-prop prop-1">⚡</text>
        <text x="180" y="68" fontSize="14" className="floating-prop prop-2">✨</text>
        <text x="92" y="70" fontSize="13" className="floating-prop prop-3">🧪</text>
      </svg>
    </div>
  );
};

export default ProjectCartoonMascot;
