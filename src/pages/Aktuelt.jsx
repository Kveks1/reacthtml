import PageHero from '../components/PageHero';
import { NewsFeed, NewsFilter, PaginationTargets } from '../components/NewsSections';
import '../aktuelt.css';

const newsPages = [
    {
        number: 1,
        articles: [
            {
                date: '2026-04-12',
                meta: '12. april 2026 · Klubben',
                title: 'Nye treningstider fra mai',
                text: 'Fra og med 1. mai utvider vi tilbudet med en ekstra teknikkøkt på torsdager for ungdom og voksne.',
            },
            {
                date: '2026-04-05',
                meta: '05. april 2026 · Arrangement',
                title: 'Åpen dag i klubben',
                text: 'Kom innom for gratis prøvetime, møte trenerne og få en introduksjon til boksetrening for alle nivåer.',
            },
            {
                date: '2026-03-29',
                meta: '29. mars 2026 · Konkurranse',
                title: 'Tre utøvere klare for regionsstevne',
                text: 'Bodø Bokseklubb stiller med tre lovende boksere til årets regionsstevne i Tromsø denne helgen.',
            },
        ],
    },
    {
        number: 2,
        articles: [
            {
                date: '2026-03-20',
                meta: '20. mars 2026 · Klubbmiljø',
                title: 'Velkommen til nye frivillige',
                text: 'Takk til alle som bidrar rundt treninger og arrangementer. Innsatsen gjør hverdagen bedre for utøverne.',
            },
            {
                date: '2026-03-14',
                meta: '14. mars 2026 · Ungdom',
                title: 'Oppstart av nybegynnerparti 13-16 år',
                text: 'Vi starter nytt parti for ungdom med fokus på grunnteknikk, koordinasjon og trygg progresjon.',
            },
            {
                date: '2026-03-08',
                meta: '08. mars 2026 · Trening',
                title: 'Felles kondisjonsøkt på lørdager',
                text: 'Fra denne uken kjører vi felles kondisjon hver lørdag kl. 10:00. Alle medlemmer er velkommen.',
            },
        ],
    },
    {
        number: 3,
        articles: [
            {
                date: '2026-03-01',
                meta: '01. mars 2026 · Info',
                title: 'Påminnelse om medlemsregistrering',
                text: 'Husk å fullføre medlemsregistrering før du starter opp. Ta kontakt hvis du trenger hjelp med innmelding.',
            },
            {
                date: '2026-02-22',
                meta: '22. februar 2026 · Kurs',
                title: 'Dommerkurs i Bodø i april',
                text: 'Norges Bokseforbund arrangerer dommerkurs i Bodø. Meld interesse til trenerteamet innen 5. april.',
            },
        ],
    },
];

function Aktuelt() {
    return (
        <main className="aktuelt-page">
            <PageHero className="news-headline" title="Aktuelt" />
            <NewsFilter />
            <PaginationTargets pageCount={newsPages.length} />
            <NewsFeed pages={newsPages} />
        </main>
    );
}

export default Aktuelt;
