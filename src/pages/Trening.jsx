import PageHero from '../components/PageHero';
import TrainingLevelSelector from '../components/TrainingLevelSelector';
import { TrainingIntro, TrainingSchedule } from '../components/TrainingSections';
import '../trening.css';

const trainingLevels = [
    {
        id: 'barn',
        label: 'Barn',
        tag: 'Aldersgruppe 6-12 år',
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

function Trening() {
    return (
        <main className="trening-page">
            <PageHero
                title="Treninger"
                action={{
                    href: '#training-schedule',
                    className: 'schedule-link',
                    label: 'SE TRENINGSTIDER',
                }}
            />

            <TrainingIntro />

            <TrainingLevelSelector
                title="Hvilken treningsgruppe passer for deg?"
                description="Trykk på en av knappene under for å se hva de ulike gruppene fokuserer på."
                levels={trainingLevels}
                defaultLevelId="barn"
            />

            <TrainingSchedule legendItems={trainingLevels} />
        </main>
    );
}

export default Trening;
