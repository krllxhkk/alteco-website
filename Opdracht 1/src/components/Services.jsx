
function Services() {
    // Gegevens van de vier diensten
    const services = [
        {
            icon: "▤",
            title: "PROMOTION AGENCY",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore."
        },
        {
            icon: "⚒",
            title: "CONSTRUCTIONS BUILDING",
            description: "Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem minima."
        },
        {
            icon: "✦",
            title: "EDUCATION ONLINE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore."
        },
        {
            icon: "↟",
            title: "FASHION DESIGN",
            description: "Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem minima."
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                {/* Titel en introductie */}
                <header className="services-heading">
                    <span className="section-subtitle">
                        ELABORATED CODE AND CREATIVE DESIGN
                    </span>

                    <h2>OUR SERVICES</h2>

                    <div className="services-divider">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <p>
                        Non numquam eius modi tempora incidunt ut labore
                        et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum.
                    </p>
                </header>

                {/* Raster met vier afzonderlijke kaarten */}
                <div className="services-grid">
                    {services.map((service) => (
                        <article className="service-card" key={service.title}>
                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <span className="service-label">
                                TUTORIALS TO HELP
                            </span>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
