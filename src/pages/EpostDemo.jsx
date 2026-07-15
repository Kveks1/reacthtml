import React from 'react';
import '../epost-demo.css';

class EpostDemo extends React.Component {
    render() {
        return (
            <main className="epost-demo-page">
                <section className="email-demo">
                    <h1>E-postskjema</h1>
                    <p>Dette er en enkel demoside som viser hvordan et e-postskjema kan se ut.</p>

                    <form className="email-form" action="#" method="post">
                        <label htmlFor="name">Navn</label>
                        <input id="name" name="name" type="text" placeholder="Ditt navn" required />

                        <label htmlFor="email">E-post</label>
                        <input id="email" name="email" type="email" placeholder="navn@epost.no" required />

                        <label htmlFor="message">Melding</label>
                        <textarea id="message" name="message" rows="6" placeholder="Skriv meldingen din her..." required></textarea>

                        <button type="submit">SEND E-POST</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default EpostDemo;
