export default function NotFound() {
    return (
        <section className="section">
            <div className="container" style={{ textAlign: "center" }}>
                <h1>404 - Page Not Found</h1>
                <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <a
                    href="/"
                    style={{
                        display: "inline-block",
                        padding: "0.75rem 1.5rem",
                        backgroundColor: "var(--color-burgundy)",
                        color: "var(--color-white)",
                        borderRadius: "var(--radius-md)",
                        textDecoration: "none",
                        fontWeight: 600,
                    }}
                >
                    Return Home
                </a>
            </div>
        </section>
    );
}
