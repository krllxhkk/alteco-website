function Footer() {
    return (
        <footer className="footer">
            <button
                className="back-to-top"
                onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }
                aria-label="Terug naar boven"
            >
                ↑
            </button>
        </footer>
    );
}

export default Footer;
