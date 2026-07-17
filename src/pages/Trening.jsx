import PageHero from '../components/PageHero';
import { TrainingIntro, TrainingSchedule } from '../components/TrainingSections';
import '../css/trening.css';

const trainingLevels = [
    { id: 'barn', label: 'Barn' },
    { id: 'voksne', label: 'Voksne' },
    { id: 'bokseskole', label: 'Bokseskole' },
    { id: 'sparring', label: 'Sparring' },
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

            <TrainingSchedule legendItems={trainingLevels} />
        </main>
    );
}

export default Trening;
