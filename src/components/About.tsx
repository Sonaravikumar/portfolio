import { profile } from "../data/portfolio";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-card">
          <p>{profile.about}</p>
        </div>

        <div className="about-image">
          <img
            src={aboutImage}
            alt="Sona Pandi"
          />
        </div>
      </div>
    </section>
  );
}

export default About;