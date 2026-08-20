import { profile } from "../data/portfolio";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <p>
          {profile.about}
        </p>
      </div>
    </section>
  );
}

export default About;