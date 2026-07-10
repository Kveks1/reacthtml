import React from 'react';

class EpostDemo extends React.Component {
    render() {
        return (
            <main>
                <section class="email-demo">
                    <h1>E-postskjema</h1>
                    <p>Dette er en enkel demoside som viser hvordan et e-postskjema kan se ut.</p>

                    <form class="email-form" action="#" method="post">
                        <label for="name">Navn</label>
                        <input id="name" name="name" type="text" placeholder="Ditt navn" required />

                        <label for="email">E-post</label>
                        <input id="email" name="email" type="email" placeholder="navn@epost.no" required />

                        <label for="message">Melding</label>
                        <textarea id="message" name="message" rows="6" placeholder="Skriv meldingen din her..." required></textarea>

                        <button type="submit">SEND E-POST</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default EpostDemo;