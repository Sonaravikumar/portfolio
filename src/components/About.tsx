import { profile } from "../data/portfolio";
import aboutImage from "../assets/about.jpg";

const stats = [
    { value: "1+", label: "Years of experience" },
    { value: "4+", label: "Projects shipped" },
    { value: "3", label: "API integrations built" },
];

function About() {
    return (
        <section className="about" id="about">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div>
                    <div className="about-card">
                        <p>{profile.about}</p>
                    </div>

                    {/* Stat Cards */}
                    <div className="about-stats">
                        {stats.map((stat) => (
                            <div key={stat.label} className="about-stat-card">
                                <span className="about-stat-value">{stat.value}</span>
                                <span className="about-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-image">
                    <img src={aboutImage} alt="Sona Pandi" />
                </div>
            </div>
        </section>
    );
}

export default About;