import React from 'react';
import TrainingLevelSelector from '../components/TrainingLevelSelector';

const trainingLevels = [
    {
        id: 'barn',
        label: 'Barn',
        tag: 'Aldersgruppe 6–12 år',
        heading: 'Trygg og leken start på boksetrening',
        text: 'Barnetreningen fokuserer på koordinasjon, lek, grunnteknikk og mestring i trygge rammer. Vi legger vekt på god stemning og å bygge selvtillit fra første økt.',
        details: [
            'Passer for nye utøvere som vil prøve boksing',
            'Fokus på lek, koordinasjon og teknikk',
            'Utstyr: treningsklær, innesko og drikkeflaske',
        ],
    },
    {
        id: 'voksne',
        label: 'Voksne',
        tag: 'Aldersgruppe 13+ / voksne',
        heading: 'Trening som bygger kondisjon og styrke',
        text: 'For ungdom og voksne kombinerer vi teknikkdriller, styrke og kondisjon. Her kan du komme i gang uansett nivå og utvikle deg i eget tempo.',
        details: [
            'Passer både nybegynnere og erfarne',
            'Fokus på grunnteknikk, fart og utholdenhet',
            'Perfekt hvis du vil trene allsidig og sosialt',
        ],
    },
    {
        id: 'bokseskole',
        label: 'Bokseskole',
        tag: 'Lær grunnlaget',
        heading: 'Et strukturert opplegg for å lære boksekunsten',
        text: 'Bokseskolen passer for deg som ønsker en tydelig innføring i bokseteknikk, fotarbeid og ringforståelse før du eventuelt går videre til mer avansert trening.',
        details: [
            'Tydelig progresjon fra grunnteknikk til mer avanserte øvelser',
            'Godt alternativ for deg som vil lære fra bunnen av',
            'Bygger trygghet før sparring og kampforberedelser',
        ],
    },
    {
        id: 'sparring',
        label: 'Sparring',
        tag: 'For erfarne utøvere',
        heading: 'Kontrollert trening med høy intensitet',
        text: 'Sparring er for utøvere som allerede har grunnleggende kontroll og vil jobbe med reaksjon, timing og taktikk i et trygt og veiledet miljø.',
        details: [
            'For utøvere som behersker grunnteknikk',
            'Veiledes av trener for trygg gjennomføring',
            'Fokus på taktikk, kontroll og utvikling',
        ],
    },
];

class Trening extends React.Component {
    render() {
        return (
            <main>
                <section className="headline">
                    <h1>Treninger</h1>
                    <a href="#training-schedule" className="schedule-link">SE TRENINGSTIDER</a>
                </section>

                <div className="training-description">
                    <div className="text-body">
                        <p>
                            Hos Bodø Bokseklubb legger vi vekt på trygge, inkluderende og lærerike treninger for både nye og erfarne utøvere. 
                            Våre økter gir en solid innføring i grunnleggende bokseteknikk, samtidig som du får trent styrke, koordinasjon og kondisjon. 
                            <br></br>
                            Alle som trener hos oss må være innmeldt i klubben før oppstart, og vi anbefaler å møte opp med treningsklær, innesko og drikkeflaske. 
                            Målet vårt er å skape et miljø der alle kan utvikle seg i sitt eget tempo og oppleve mestring i ringen.
                        </p>
                    </div>

                    <div className="training-video">
                        <video controls aria-label="Treningsvideo">
                            <source src="/assets/videos/boksetrening.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <TrainingLevelSelector
                    title="Hvilken treningsgruppe passer for deg?"
                    description="Trykk på en av knappene under for å se hva de ulike gruppene fokuserer på."
                    levels={trainingLevels}
                    defaultLevelId="barn"
                />

                <section className="training-schedule" id="training-schedule">
                    <h2>Treningstider</h2>

                    <div className="week-nav" aria-hidden="false">
                        <button className="nav-btn prev-week" aria-label="Forrige uke">◀</button>
                        <div className="month-label" aria-hidden="true"></div>
                        <button className="nav-btn next-week" aria-label="Neste uke">▶</button>
                    </div>

                    <div className="calendar-area">
                        <aside className="legend" aria-label="Forklaring på treningstyper">
                            <ul>
                                <li><span className="legend-swatch barn"></span> Barn</li>
                                <li><span className="legend-swatch voksne"></span> Voksne</li>
                                <li><span className="legend-swatch bokseskole"></span> Bokseskole</li>
                                <li><span className="legend-swatch sparring"></span> Sparring</li>
                            </ul>
                        </aside>

                        <div className="calendar-wrapper">
                            <div className="calendar" role="grid" aria-label="Treningskalender">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Trening;
