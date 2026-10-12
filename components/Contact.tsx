export default function Contact() {
    return (
        <section className="contact-section container" id="contact">
            <p className="eyebrow">05 · CONTACT</p>
            <h2>Let&apos;s build something!</h2>
            <p>
                I&apos;m interested in software engineering opportunities across front-end,
                mobile, full-stack, and AI-powered development.
            </p>

            <div className="contact-actions">
                <a className="button button-primary" href="mailto:yicaiweng@gmail.com">
                    Email Me
                </a>
                <a
                    className="button button-ghost"
                    href="https://www.linkedin.com/in/yicaiweng"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="button button-ghost"
                    href="https://github.com/yicaiweng"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}
