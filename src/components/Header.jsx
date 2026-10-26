
import Navbar from "./Navbar";

function Header() {
    return (
        <header>

            {/* Bovenste donkere balk met contactgegevens */}
            <div className="top-bar">
                <div className="container top-bar-content">

                    {/* Contactgegevens aan de linkerkant */}
                    <div className="contact-info">
                        <span>✉ info@yoursite.com</span>
                        <span>│</span>
                        <span>☎ +77 000 453</span>
                    </div>

                    {/* Social media en de offerteknop aan de rechterkant */}
                    <div className="social-links">
                        <span>f</span>
                        <span>G</span>
                        <span>in</span>

                        <button>GET A QUOTE</button>
                    </div>

                </div>
            </div>

            {/* Hoofdnavigatie van de website */}
            <Navbar />

        </header>
    );
}

export default Header;