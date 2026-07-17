import { FeatureSection, MemberCallToAction, SponsorsSection, VideoHero } from '../components/HomePageSections';
import '../css/bodobokseklubb.css';

function BodoBokseklubb() {
    return (
        <main className="home-page">
            <VideoHero />

            <FeatureSection
                className="train-with-us"
                image="/assets/images/boxing_gloves.jpg"
                imageAlt="Boksehansker"
                title="TREN MED OSS"
            >
                Hos Bodø Bokseklubb handler trening om mer enn bare slag og teknikk. Du utvikler styrke, utholdenhet og mental robusthet.
                Vi tilbyr trening for alle nivåer og aldre. Øktene kombinerer teknisk boksetrening, funksjonell styrke og høyintensiv kondisjon.
            </FeatureSection>

            <FeatureSection
                className="tradition-for-development"
                image="/assets/images/female_boxer.jpg"
                imageAlt="En av våre kvinnelige boksere"
                title="TRADISJON FOR UTVIKLING"
                imagePosition="right"
            >
                Bodø Bokseklubb er forankret i lange tradisjoner og har vedvart siden 1986. Erfaringen som er bygget opp over tid preger treningsmetodene våre og sikrer kvalitet i hver økt.
                Du trener ikke bare for øyeblikket, men som en del av en kultur som har utviklet utøvere i generasjoner.
            </FeatureSection>

            <FeatureSection
                className="strong-community"
                image="/assets/images/group_photo.jpg"
                imageAlt="En gruppe som trener sammen"
                title="ET STERKT FELLESSKAP"
            >
                Bodø Bokseklubb er et miljø der alle bidrar til hverandres utvikling. Du trener ikke alene - du er en del av en gruppe som stiller opp, pusher og holder hverandre ansvarlige gjennom hver økt.
            </FeatureSection>

            <MemberCallToAction />
            <SponsorsSection />
        </main>
    );
}

export default BodoBokseklubb;
