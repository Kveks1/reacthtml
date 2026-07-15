import React from "react";
import '../bodobokseklubb.css';

class BodoBokseklubb extends React.Component {
    render() {
        return (
        <main className="home-page">
            <section className="welcome-section">
                <video autoPlay muted loop playsInline disablePictureInPicture className="background-video" aria-hidden="true">
                    <source src="/assets/videos/front_page.mp4" type="video/mp4"/>
                </video>

                <h1>Bygg styrke. Bygg karakter. <br /> Med oss i Bodø Bokseklubb</h1>
            </section>

            <section className="train-with-us">
                <img src="/assets/images/boxing_gloves.jpg" alt="Boksehansker" />

                <div className="text-panel">
                    <h2>TREN MED OSS</h2>

                    <p>
                        Hos Bodø Bokseklubb handler trening om mer enn bare slag og teknikk. Du utvikler styrke, utholdenhet og mental robusthet.
                        Vi tilbyr trening for alle nivåer og aldre. Øktene kombinerer teknisk boksetrening, funksjonell styrke og høyintensiv kondisjon.
                    </p>
                </div>
            </section>

            <section className="tradition-for-development">
                <div className="text-panel">
                    <h2>TRADISJON FOR UTVIKLING</h2>

                    <p>
                        Bodø Bokseklubb er forankret i lange tradisjoner og har vedvart siden 1986. Erfaringen som er bygget opp over tid preger treningsmetodene våre og sikrer kvalitet i hver økt.
                        Du trener ikke bare for øyeblikket, men som en del av en kultur som har utviklet utøvere i generasjoner.
                    </p>
                </div>

                <img src="/assets/images/female_boxer.jpg" alt="En av våre kvinnelige boksere" />
            </section>

            <section className="strong-community">
                <img src="/assets/images/group_photo.jpg" alt="En gruppe som trener sammen" />

                <div className="text-panel">
                    <h2>ET STERKT FELLESSKAP</h2>

                    <p>
                        Bodø Bokseklubb er et miljø der alle bidrar til hverandres utvikling. Du trener ikke alene - du er en del av en gruppe som stiller opp, pusher og holder hverandre ansvarlige gjennom hver økt.
                    </p>
                </div>
            </section>

            <div className="become-member-btn">
                <div className="btn-container">
                    <a href="/priser" className="btn" aria-label="Bli medlem">BLI MEDLEM</a>
                </div>
            </div>

            <section className="sponsors">
                <div className="headline">
                   <h2>VÅRE SAMARBEIDSPARTNERE</h2> 
                </div>

                <div className="sponsor-logos">
                    <img src="/assets/images/bodoe_energi_logo.svg" alt="Logo til Bodø Energi" />
                    <img src="/assets/images/oestboe_logo.svg" alt="Logo til Østbø" />
                </div>
            </section>
        </main>
        );
    }
}

export default BodoBokseklubb;
