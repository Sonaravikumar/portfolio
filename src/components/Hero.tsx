import { useState, useEffect } from "react";
import { profile } from "../data/portfolio";
import { FiDownload, FiArrowUpRight  } from "react-icons/fi";

const codeLines = [
  { num: 1, text: 'const developer = {', tokens: [{ text: 'const ', cls: 'code-keyword' }, { text: 'developer ', cls: 'code-variable' }, { text: '= {', cls: 'code-punctuation' }] },
  { num: 2, text: '  name: "Sona Pandi",', tokens: [{ text: '  name: ', cls: 'code-key' }, { text: '"Sona Pandi"', cls: 'code-string' }, { text: ',', cls: 'code-punctuation' }] },
  { num: 3, text: '  role: "AI & Backend Engineer",', tokens: [{ text: '  role: ', cls: 'code-key' }, { text: '"AI & Backend Engineer"', cls: 'code-string' }, { text: ',', cls: 'code-punctuation' }] },
  { num: 4, text: '  skills: ["Node.js", "TypeScript", "MongoDB"],', tokens: [{ text: '  skills: [', cls: 'code-key' }, { text: '"Node.js", "TypeScript", "MongoDB"', cls: 'code-string' }, { text: '],', cls: 'code-punctuation' }] },
  { num: 5, text: '  passion: "Scalable Backend Systems"', tokens: [{ text: '  passion: ', cls: 'code-key' }, { text: '"Scalable Backend Systems"', cls: 'code-string' }] },
  { num: 6, text: '};', tokens: [{ text: '};', cls: 'code-punctuation' }] },
];

function Hero() {
  const [activeLine, setActiveLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (activeLine < codeLines.length) {
      const currentLineText = codeLines[activeLine].text;
      if (charIndex < currentLineText.length) {
        const timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 35);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setActiveLine((prev) => prev + 1);
          setCharIndex(0);
        }, 250);
        return () => clearTimeout(timer);
      }
    } else {
      const resetTimer = setTimeout(() => {
        setActiveLine(0);
        setCharIndex(0);
      }, 6000);
      return () => clearTimeout(resetTimer);
    }
  }, [activeLine, charIndex]);

  const renderLineContent = (lineObj: typeof codeLines[0], isCurrent: boolean) => {
    if (!isCurrent) {
      return lineObj.tokens.map((tok, i) => (
        <span key={i} className={tok.cls}>{tok.text}</span>
      ));
    }

    const textToRender = lineObj.text.slice(0, charIndex);
    return (
      <>
        <span className="code-variable">{textToRender}</span>
        <span className="typewriter-cursor">|</span>
      </>
    );
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">
          👋 Hello, I'm
        </p>

        <h1>
          <span className="gradient-text">
            {profile.name}
          </span>
        </h1>

        <h2>{profile.role}</h2>

        <p className="hero-description">
          {profile.tagline}
        </p>

        {/* Quick Contact Info */}
        <div className="hero-contact-bar">
          <span className="hero-contact-item">📍 Madurai, Tamil Nadu, India</span>
          <span className="hero-contact-item">✉ sonaravikumar2872@gmail.com</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary">
            Build Together <FiArrowUpRight />
          </a>
          <a
            href="/Sona_pandi-Resume.pdf"
            download="Sona_pandi-Resume.pdf"
            className="hero-btn-secondary"
          >
            <FiDownload /> Grab My CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="mailto:sonaravikumar2872@gmail.com"
            className="hero-social-icon"
            aria-label="Email"
          >
            ✉
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-card">
          <div className="visual-header">
            <div className="visual-dots">
              <span className="visual-dot"></span>
              <span className="visual-dot"></span>
              <span className="visual-dot"></span>
            </div>
            <div className="visual-filename">
              <span className="ts-icon">TS</span> developer.ts
            </div>
          </div>

          <div className="visual-code-body">
            {codeLines.map((lineObj, idx) => {
              if (idx > activeLine) return null;
              const isCurrent = idx === activeLine;
              return (
                <div key={lineObj.num} className="code-line">
                  <span className="code-line-num">{lineObj.num}</span>
                  <div className="code-text-content">
                    {renderLineContent(lineObj, isCurrent)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;