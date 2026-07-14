import React from 'react';

class Aktuelt extends React.Component {
    render() {
        return (
            <main>
                <section className="news-headline">
                    <h1>Aktuelt</h1>
                </section>

                <section className="news-filter" aria-labelledby="news-filter-heading">
                    <div className="news-filter__content">
                        <div>
                            <p className="eyebrow">Demo av jQuery UI</p>
                            <h2 id="news-filter-heading">Filtrer nyheter etter dato</h2>
                            <p className="news-filter__description">Velg en dato for å vise nyheter publisert den dagen. Dette er en front-end demonstrasjon siden siden ikke har en backend.</p>
                        </div>

                        <div className="news-filter__controls">
                            <label htmlFor="news-date-filter">Velg dato</label>
                            <div className="news-filter__field-row">
                                <input type="text" id="news-date-filter" name="news-date-filter" placeholder="dd.mm.åååå" autocomplete="off" />
                                <button type="button" id="clear-news-filter" className="news-filter__reset">Vis alle</button>
                            </div>
                            <p id="news-filter-status" className="news-filter__status" aria-live="polite">Viser alle nyheter.</p>
                        </div>
                    </div>
                </section>

                <div className="pagination-targets" aria-hidden="true">
                    <span id="feed-page-1"></span>
                    <span id="feed-page-2"></span>
                    <span id="feed-page-3"></span>
                </div>

                <section className="news-feed" aria-label="Nyhetsoversikt">
                    <div className="news-page page-1">
                        <article className="news-card" data-date="2026-04-12">
                            <p className="meta">12. april 2026 · Klubben</p>
                            <h2>Nye treningstider fra mai</h2>
                            <p>Fra og med 1. mai utvider vi tilbudet med en ekstra teknikkøkt på torsdager for ungdom og voksne.</p>
                        </article>

                        <article className="news-card" data-date="2026-04-05">
                            <p className="meta">05. april 2026 · Arrangement</p>
                            <h2>Åpen dag i klubben</h2>
                            <p>Kom innom for gratis prøvetime, møte trenerne og få en introduksjon til boksetrening for alle nivåer.</p>
                        </article>

                        <article className="news-card" data-date="2026-03-29">
                            <p className="meta">29. mars 2026 · Konkurranse</p>
                            <h2>Tre utøvere klare for regionsstevne</h2>
                            <p>Bodø Bokseklubb stiller med tre lovende boksere til årets regionsstevne i Tromsø denne helgen.</p>
                        </article>

                        <nav className="feed-pagination" aria-label="Paginering nyhetsoversikt">
                            <span className="page-indicator">Side 1 av 3</span>
                            <a href="#feed-page-2">Neste side</a>
                        </nav>
                    </div>

                    <div className="news-page page-2">
                        <article className="news-card" data-date="2026-03-20">
                            <p className="meta">20. mars 2026 · Klubbmiljø</p>
                            <h2>Velkommen til nye frivillige</h2>
                            <p>Takk til alle som bidrar rundt treninger og arrangementer. Innsatsen gjør hverdagen bedre for utøverne.</p>
                        </article>

                        <article className="news-card" data-date="2026-03-14">
                            <p className="meta">14. mars 2026 · Ungdom</p>
                            <h2>Oppstart av nybegynnerparti 13-16 år</h2>
                            <p>Vi starter nytt parti for ungdom med fokus på grunnteknikk, koordinasjon og trygg progresjon.</p>
                        </article>

                        <article className="news-card" data-date="2026-03-08">
                            <p className="meta">08. mars 2026 · Trening</p>
                            <h2>Felles kondisjonsøkt på lørdager</h2>
                            <p>Fra denne uken kjører vi felles kondisjon hver lørdag kl. 10:00. Alle medlemmer er velkommen.</p>
                        </article>

                        <nav className="feed-pagination" aria-label="Paginering nyhetsoversikt">
                            <a href="#feed-page-1">Forrige side</a>
                            <span className="page-indicator">Side 2 av 3</span>
                            <a href="#feed-page-3">Neste side</a>
                        </nav>
                    </div>

                    <div className="news-page page-3">
                        <article className="news-card" data-date="2026-03-01">
                            <p className="meta">01. mars 2026 · Info</p>
                            <h2>Påminnelse om medlemsregistrering</h2>
                            <p>Husk å fullføre medlemsregistrering før du starter opp. Ta kontakt hvis du trenger hjelp med innmelding.</p>
                        </article>

                        <article className="news-card" data-date="2026-02-22">
                            <p className="meta">22. februar 2026 · Kurs</p>
                            <h2>Dommerkurs i Bodø i april</h2>
                            <p>Norges Bokseforbund arrangerer dommerkurs i Bodø. Meld interesse til trenerteamet innen 5. april.</p>
                        </article>

                        <nav className="feed-pagination" aria-label="Paginering nyhetsoversikt">
                            <a href="#feed-page-2">Forrige side</a>
                            <span className="page-indicator">Side 3 av 3</span>
                        </nav>
                    </div>
                </section>
            </main>
        );
    }
}

export default Aktuelt;