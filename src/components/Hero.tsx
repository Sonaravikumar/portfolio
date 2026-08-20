import { profile } from "../data/profile";

function Hero() {
  return (
    <section>
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
    </section>
  );
}

export default Hero;