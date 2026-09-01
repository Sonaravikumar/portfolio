import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize (to desktop)
  useEffect(() => {
    const close = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#architecture", label: "Architecture" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Sona Pandi R</h2>

        {/* Desktop nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Drawer — rendered at body level via Portal */}
      {menuOpen && createPortal(
        <div
          className="nav-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="nav-mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-mobile-drawer-header">
              <span className="nav-mobile-brand">Sona Pandi R</span>
              <button
                className="nav-mobile-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <ul className="nav-mobile-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Navbar;