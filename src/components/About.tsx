import { profile } from "../data/portfolio";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        {profile.about}
      </p>
    </section>
  );
}

export default About;