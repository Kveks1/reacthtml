function ContactPersonCard({ person }) {
    return (
        <div className={person.className}>
            <img src={person.image} alt={person.imageAlt} />

            <div className="text-panel">
                <h2>{person.role}</h2>
                <p>{person.name}</p>
                <address> Telefon: {person.phone}</address>
                <address> E-post: {person.email}</address>
            </div>
        </div>
    );
}

function ContactInfo({ people }) {
    return (
        <section className="contact-info">
            {people.map((person) => (
                <ContactPersonCard key={person.email} person={person} />
            ))}
        </section>
    );
}

function ContactMap() {
    return (
        <section className="map" id="map">
            <h2>Vår beliggenhet</h2>
            <iframe
                title="Kart som viser Notveien 15, Bodø"
                src="https://www.google.com/maps?q=Notveien+15,+Bod%C3%B8&z=15&output=embed"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </section>
    );
}

export { ContactInfo, ContactMap };
