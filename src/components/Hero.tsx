import { profile } from "../data/portfolio";

function Hero() {
  return (
    <section>
      <h1>{profile.name}</h1>

      <h2>{profile.role}</h2>

      <p>{profile.tagline}</p>

      <div>
        <a href={profile.github}>
          GitHub
        </a>

        <a href={profile.linkedin}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;