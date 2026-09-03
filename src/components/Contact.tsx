import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";

function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );
            setStatus("sent");
            form.reset();
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-subtitle">
                I'm currently open to Backend Developer opportunities, freelance
                projects, and collaborations. Feel free to reach out.
            </p>

            <div className="contact-grid">
                {/* Left Column – Info Cards */}
                <div className="contact-info">
                    <div className="contact-info-card">
                        <span className="contact-info-icon">📧</span>
                        <div>
                            <span className="contact-info-label">EMAIL</span>
                            <span className="contact-info-value">
                                sonaravikumar2872@gmail.com
                            </span>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <span className="contact-info-icon">📍</span>
                        <div>
                            <span className="contact-info-label">LOCATION</span>
                            <span className="contact-info-value">
                                Madurai, Tamil Nadu, India
                            </span>
                        </div>
                    </div>

                    <div className="contact-social-links">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{marginRight: '8px'}}>
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{marginRight: '8px'}}>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href="mailto:sonaravikumar2872@gmail.com"
                            className="contact-social-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{marginRight: '8px'}}>
                                <path d="M0 3v18h24v-18h-24zm6.623 2h10.754l-5.377 5.377-5.377-5.377zm-4.623 1.414l6.793 6.793-6.793 6.793v-13.586zm1.414 14.586l6.793-6.793 1.793 1.793 1.793-1.793 6.793 6.793h-17.172zm18.586-1l-6.793-6.793 6.793-6.793v13.586z"/>
                            </svg>
                            Email
                        </a>
                    </div>
                </div>

                {/* Right Column – Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-field">
                        <label htmlFor="contact-subject">Subject</label>
                        <input
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Frontend role / project enquiry"
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="contact-message">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about the role, project or collaboration..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending"
                            ? "Sending..."
                            : status === "sent"
                              ? "Sent ✓"
                              : status === "error"
                                ? "Failed – retry"
                                : "Send message ↗"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;