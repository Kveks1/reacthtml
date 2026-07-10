import React from "react";

class BodoBokseklubb extends React.Component {
    render() {
        return (
        <main>
            <section class="welcome-section">
                <video autoplay muted loop playsinline disablePictureInPicture class="background-video" aria-hidden="true">
                    <source src="assets/videos/front_page.mp4" type="video/mp4"/>
                </video>

                <h1>Bygg styrke. Bygg karakter. <br /> Med oss i Bodø Bokseklubb</h1>
            </section>

            <section class="train-with-us">
                <img src="assets/images/boxing_gloves.jpg" alt="Boksehansker" />

                <div class="text-panel">
                    <h2>TREN MED OSS</h2>

                    <p>
                        Hos Bodø Bokseklubb handler trening om mer enn bare slag og teknikk. Du utvikler styrke, utholdenhet og mental robusthet.
                        Vi tilbyr trening for alle nivåer og aldre. Øktene kombinerer teknisk boksetrening, funksjonell styrke og høyintensiv kondisjon.
                    </p>
                </div>
            </section>

            <section class="tradition-for-development">
                <div class="text-panel">
                    <h2>TRADISJON FOR UTVIKLING</h2>

                    <p>
                        Bodø Bokseklubb er forankret i lange tradisjoner og har vedvart siden 1986. Erfaringen som er bygget opp over tid preger treningsmetodene våre og sikrer kvalitet i hver økt.
                        Du trener ikke bare for øyeblikket, men som en del av en kultur som har utviklet utøvere i generasjoner.
                    </p>
                </div>

                <img src="assets/images/female_boxer.jpg" alt="En av våre kvinnelige boksere" />
            </section>

            <section class="strong-community">
                <img src="assets/images/group_photo.jpg" alt="En gruppe som trener sammen" />

                <div class="text-panel">
                    <h2>ET STERKT FELLESSKAP</h2>

                    <p>
                        Bodø Bokseklubb er et miljø der alle bidrar til hverandres utvikling. Du trener ikke alene - du er en del av en gruppe som stiller opp, pusher og holder hverandre ansvarlige gjennom hver økt.
                    </p>
                </div>
            </section>

            <div class="become-member-btn">
                <div class="btn-container">
                    <a href="pages/priser.html" class="btn" aria-label="Bli medlem">BLI MEDLEM</a>
                </div>
            </div>

            <section class="sponsors">
                <div class="headline">
                   <h2>VÅRE SAMARBEIDSPARTNERE</h2> 
                </div>

                <div class="sponsor-logos">
                    <img src="assets/images/bodoe_energi_logo.svg" alt="Logo til Bodø Energi" />
                    <img src="assets/images/oestboe_logo.svg" alt="Logo til Østbø" />
                </div>
            </section>
        </main>
        );
    }
}

export default BodoBokseklubb;