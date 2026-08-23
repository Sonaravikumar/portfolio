import { architectures } from "../data/portfolio";

function Architecture() {
    return (
        <section className="architecture" id="architecture">
            <h2 className="section-title">
                System <span className="gradient-text">Architectures</span>
            </h2>
            <p className="section-subtitle">
                High-level designs and data flow diagrams of the backend systems and platforms I've engineered.
            </p>

            <div className="architecture-container">
                {architectures.map((architecture) => (
                    <div
                        key={architecture.title}
                        className="architecture-card"
                    >
                        <h3>{architecture.title}</h3>

                        <div className="flow">
                            {architecture.flow.map((step, index) => (
                                <div key={index}>
                                    <div className="flow-item">
                                        {step}
                                    </div>

                                    {index !==
                                        architecture.flow.length - 1 && (
                                            <div className="arrow">
                                                ↓
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Architecture;