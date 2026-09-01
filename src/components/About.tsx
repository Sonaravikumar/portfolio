import { profile } from "../data/portfolio";
import aboutImage from "../assets/about.png";

const stats = [
    { value: "1+", label: "Years of experience" },
    { value: "10+", label: "AI Features Built" },
    { value: "99%", label: "Backend Focus" },
];

function About() {
    return (
        <section className="about" id="about">
            <h2 className="section-title">Who <span className="gradient-text">I Am</span></h2>

            <div className="about-role-badge">
                AI & Backend Engineer
            </div>

            <div className="about-content">
                <div>
                    <div className="about-card">
                        <div className="about-text">
                            <p className="about-intro">{profile.about.intro}</p>

                            <ul className="about-highlights">
                                {profile.about.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="about-outro">{profile.about.outro}</p>
                        </div>
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