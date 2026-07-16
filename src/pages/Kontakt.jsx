import PageHero from '../components/PageHero';
import { ContactInfo, ContactMap } from '../components/ContactSections';
import '../kontakt.css';

const contactPeople = [
    {
        className: 'main-coach',
        role: 'Hovedtrener',
        name: 'Jan Myhre',
        phone: '900 48 018',
        email: 'jan.myhre1@gmail.com',
        image: '/assets/images/jan_myhre.jpg',
        imageAlt: 'Bilde av hovedtrener Jan Myhre',
    },
    {
        className: 'boxing-school',
        role: 'Ansvarlig for bokseskolen',
        name: 'Willy Rudborg',
        phone: '913 37 285',
        email: 'wrudborg@online.no',
        image: '/assets/images/willy_rudborg.jpg',
        imageAlt: 'Bilde av ansvarlig for bokseskolen, Willy Rudborg',
    },
    {
        className: 'coach',
        role: 'Trener',
        name: 'Vera Schnabel',
        phone: '907 35 200',
        email: 'veraschnabel_bbk@hotmail.com',
        image: '/assets/images/vera_schnabel.jpg',
        imageAlt: 'Bilde av trener Vera Schnabel',
    },
];

function Kontakt() {
    return (
        <main className="kontakt-page">
            <PageHero
                title="Kontakt oss"
                action={{
                    href: '#map',
                    className: 'map-link',
                    label: 'Se Beliggenhet',
                }}
            />

            <ContactInfo people={contactPeople} />
            <ContactMap />
        </main>
    );
}

export default Kontakt;
