import { certifications } from "../data/portfolio";

function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <h2 className="section-title">Certifications</h2>

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