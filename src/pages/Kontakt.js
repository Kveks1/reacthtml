import React from 'react';

class Kontakt extends React.Component {
    render() {
        return (
            <main>
                <section className="headline">
                    <h1>Kontakt oss</h1>
                    <a href="#map" className="map-link">Se Beliggenhet</a>
                </section>

                <section className="contact-info">
                    <div className="main-coach">
                        <img src="/assets/images/jan_myhre.jpg" alt="Bilde av hovedtrener Jan Myhre" />

                        <div className="text-panel">
                            <h2>Hovedtrener</h2>
                            <p>Jan Myhre</p>
                            <address> Telefon: 900 48 018</address>
                            <address> E-post: jan.myhre1@gmail.com</address>
                        </div>
                    </div>

                    <div className="boxing-school">
                        <img src="/assets/images/willy_rudborg.jpg" alt="Bilde av ansvarlig for bokseskolen, Willy Rudborg" />

                        <div className="text-panel">
                            <h2>Ansvarlig for bokseskolen</h2>
                            <p>Willy Rudborg</p>
                            <address> Telefon: 913 37 285</address>
                            <address> E-post: wrudborg@online.no</address>
                        </div>
                    </div>

                    <div className="coach">
                        <img src="/assets/images/vera_schnabel.jpg" alt="Bilde av trener Vera Schnabel" />

                        <div className="text-panel">
                            <h2>Trener</h2>
                            <p>Vera Schnabel</p>
                            <address> Telefon: 907 35 200</address>
                            <address> E-post: veraschnabel_bbk@hotmail.com</address>
                        </div>
                    </div>
                </section>

                <section className="map" id="map">
                    <h2>Vår beliggenhet</h2>
                    <iframe title="Kart som viser Notveien 15, Bodø" src="https://www.google.com/maps?q=Notveien+15,+Bod%C3%B8&z=15&output=embed" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </section>
            </main>
        );
    }
}

export default Kontakt;
