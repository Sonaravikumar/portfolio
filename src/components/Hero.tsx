import { profile } from "../data/portfolio";

function Hero() {
  return (
    <section className="hero">
        <div className="hero-content">
            <p className="hero-tag">
                👋 Hello, I'm
            </p>

            <h1>{profile.name}</h1>

            <h2>{profile.role}</h2>

            <p className="hero-description">
                {profile.tagline}
            </p>

            <div className="hero-buttons">
                <a href={profile.github}>
                    GitHub
                </a>

                <a href={profile.linkedin}>
                    LinkedIn
                </a>
            </div>
        </div>
    </section>
  );
}

export default Hero;