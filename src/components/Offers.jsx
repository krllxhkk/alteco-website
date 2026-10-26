import "./Offers.css";

function Offers() {
    return (
        <section className="offers" id="offers">
            <div className="container offers-grid">

                {/* Afbeelding aan de linkerkant */}
                <div className="offers-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                        alt="Zakelijk team tijdens een vergadering"
                        className="offers-image"
                    />
                </div>

                {/* Tekst en aanbiedingen aan de rechterkant */}
                <div className="offers-content">
                    <span className="section-subtitle">
                        ELABORATED CODE AND CREATIVE DESIGN
                    </span>

                    <h2>WHAT WE OFFERS</h2>

                    <p className="offers-intro">
                        Duis sed odio sit amet nibh vulputate cursus
                        a sit amet mauris. Morbi accumsan ipsum velit.
                    </p>

                                        {/* Twee aanbiedingen met pictogrammen */}
                    <div className="offer-items">
                        <article className="offer-item">
                            <div className="offer-icon" aria-hidden="true">♞</div>
                            <h3>Clean Modern Code</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien
                                vitae, condimentum ultricies magna et.
                                Quisque lobortis...
                            </p>
                            <a href="#read-more">READ MORE »</a>
                        </article>

                        <article className="offer-item">
                            <div className="offer-icon" aria-hidden="true">♟</div>
                            <h3>Design To Brag About</h3>
                            <p>
                                Phasellus enim libero, blandit vel sapien
                                vitae, condimentum ultricies magna et.
                                Quisque lobortis...
                            </p>
                            <a href="#read-more">READ MORE »</a>
                        </article>
                    </div>

                    {/* Knop om alle aanbiedingen te bekijken */}
                    <a href="#all-offers" className="dark-button">
                        VIEW ALL OFFERS »
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Offers;