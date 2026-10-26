
function Navbar() {
    return (
        <nav className="navbar">

            <div className="container navbar-content">

                {/* Logo van het bedrijf */}
                <div className="logo">

                    {/* Eenvoudig icoon als logo */}
                    <span className="logo-icon">✹</span>

                    <div>
                        <strong>ALTECO</strong>
                        <small>Business Template</small>
                    </div>

                </div>

                {/* Navigatielinks voor desktop */}
                <div className="nav-links">

                    <a href="#home" className="active">
                        HOME
                    </a>

                    <a href="#about">
                        ABOUT US
                    </a>

                    <a href="#services">
                        SERVICES
                    </a>

                    <a href="#pages">
                        PAGES
                    </a>

                    <a href="#shop">
                        SHOP
                    </a>

                    <a href="#blog">
                        BLOG
                    </a>

                    <a href="#contact">
                        CONTACT US
                    </a>

                    {/* Zoekicoon */}
                    <span className="search-icon">
                        🔍
                    </span>

                </div>

                {/* Hamburgerknop voor kleinere schermen */}
                <button className="menu-button">
                    ☰
                </button>

            </div>

        </nav>
    );
}

export default Navbar;