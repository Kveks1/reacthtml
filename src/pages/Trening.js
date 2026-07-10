import React from 'react';

class Trening extends React.Component {
    render() {
        return (
            <main>
                <section class="headline">
                    <h1>Treninger</h1>
                    <a href="#training-schedule" class="schedule-link">SE TRENINGSTIDER</a>
                </section>

                <div class="training-description">
                    <div class="text-body">
                        <p>
                            Hos Bodø Bokseklubb legger vi vekt på trygge, inkluderende og lærerike treninger for både nye og erfarne utøvere. 
                            Våre økter gir en solid innføring i grunnleggende bokseteknikk, samtidig som du får trent styrke, koordinasjon og kondisjon. 
                            <br></br>
                            Alle som trener hos oss må være innmeldt i klubben før oppstart, og vi anbefaler å møte opp med treningsklær, innesko og drikkeflaske. 
                            Målet vårt er å skape et miljø der alle kan utvikle seg i sitt eget tempo og oppleve mestring i ringen.
                        </p>
                    </div>

                    <div class="training-video">
                        <video controls aria-label="Treningsvideo">
                            <source src="../assets/videos/boksetrening.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <section class="training-schedule" id="training-schedule">
                    <h2>Treningstider</h2>

                    <div class="week-nav" aria-hidden="false">
                        <button class="nav-btn prev-week" aria-label="Forrige uke">◀</button>
                        <div class="month-label" aria-hidden="true"></div>
                        <button class="nav-btn next-week" aria-label="Neste uke">▶</button>
                    </div>

                    <div class="calendar-area">
                        <aside class="legend" aria-label="Forklaring på treningstyper">
                            <ul>
                                <li><span class="legend-swatch barn"></span> Barn</li>
                                <li><span class="legend-swatch voksne"></span> Voksne</li>
                                <li><span class="legend-swatch bokseskole"></span> Bokseskole</li>
                                <li><span class="legend-swatch sparring"></span> Sparring</li>
                            </ul>
                        </aside>

                        <div class="calendar-wrapper">
                            <div class="calendar" role="grid" aria-label="Treningskalender">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Trening;