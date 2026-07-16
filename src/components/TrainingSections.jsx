function TrainingIntro() {
    return (
        <div className="training-description">
            <div className="text-body">
                <p>
                    Hos Bodø Bokseklubb legger vi vekt på trygge, inkluderende og lærerike treninger for både nye og erfarne utøvere.
                    Våre økter gir en solid innføring i grunnleggende bokseteknikk, samtidig som du får trent styrke, koordinasjon og kondisjon.
                    <br />
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
    );
}

function TrainingLegend({ items }) {
    return (
        <aside className="legend" aria-label="Forklaring på treningstyper">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <span className={`legend-swatch ${item.id}`}></span> {item.label}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

function TrainingSchedule({ legendItems }) {
    return (
        <section className="training-schedule" id="training-schedule">
            <h2>Treningstider</h2>

            <div className="week-nav" aria-hidden="false">
                <button className="nav-btn prev-week" aria-label="Forrige uke">◀</button>
                <div className="month-label" aria-hidden="true"></div>
                <button className="nav-btn next-week" aria-label="Neste uke">▶</button>
            </div>

            <div className="calendar-area">
                <TrainingLegend items={legendItems} />

                <div className="calendar-wrapper">
                    <div className="calendar" role="grid" aria-label="Treningskalender"></div>
                </div>
            </div>
        </section>
    );
}

export { TrainingIntro, TrainingSchedule };
