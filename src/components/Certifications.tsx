import { certifications } from "../data/portfolio";

function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <h2 className="section-title">
                My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle">
                Professional certifications and credentials that validate my technical expertise and continuous learning.
            </p>

            <div className="certifications-container">
                {certifications.map((certification) => (
                    <a
                        key={certification.title}
                        href={certification.url}
                        className="cert-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {certification.title}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Certifications;