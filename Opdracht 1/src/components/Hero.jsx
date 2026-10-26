// De achtergrondafbeelding instellen
const heroImage =
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85";
function Hero() {
    return (
       /* De hero-banner met achtergrondafbeelding */
<section
    className="hero"
    id="home"
    style={{ backgroundImage: `url(${heroImage})` }}
>
            {/* Donkere overlay boven de achtergrondafbeelding */}
            <div className="hero-overlay"></div>

            {/* Inhoud van de hero */}
            <div className="container hero-container">

                <div className="hero-content">

                    {/* Hoofdtitel */}
                    <h1>
                        Business
                        <span> YOUR SATISFACTION</span>
                    </h1>

                    {/* Korte beschrijving */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>

                    {/* Actieknoppen */}
                    <div className="hero-buttons">
                        <button>LOGIN</button>
                        <button>REGISTER</button>
                    </div>

                </div>

            </div>

            {/* Vorige slide */}
            <button className="slider-arrow slider-left">
                ‹
            </button>

            {/* Volgende slide */}
            <button className="slider-arrow slider-right">
                ›
            </button>

            {/* Slider indicators */}
            <div className="slider-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>

        </section>
    );
}

export default Hero;