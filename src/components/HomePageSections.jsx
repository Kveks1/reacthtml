function VideoHero() {
    return (
        <section className="welcome-section">
            <video autoPlay muted loop playsInline disablePictureInPicture className="background-video" aria-hidden="true">
                <source src="/assets/videos/front_page.mp4" type="video/mp4" />
            </video>

            <h1>Bygg styrke. Bygg karakter. <br /> Med oss i Bodø Bokseklubb</h1>
        </section>
    );
}

function FeatureSection({ className, image, imageAlt, title, children, imagePosition = 'left' }) {
    const imageElement = <img src={image} alt={imageAlt} />;
    const textElement = (
        <div className="text-panel">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );

    return (
        <section className={className}>
            {imagePosition === 'left' ? imageElement : textElement}
            {imagePosition === 'left' ? textElement : imageElement}
        </section>
    );
}

function MemberCallToAction() {
    return (
        <div className="become-member-btn">
            <div className="btn-container">
                <a href="/priser" className="btn" aria-label="Bli medlem">BLI MEDLEM</a>
            </div>
        </div>
    );
}

function SponsorsSection() {
    return (
        <section className="sponsors">
            <div className="headline">
                <h2>VÅRE SAMARBEIDSPARTNERE</h2>
            </div>

            <div className="sponsor-logos">
                <img src="/assets/images/bodoe_energi_logo.svg" alt="Logo til Bodø Energi" />
                <img src="/assets/images/oestboe_logo.svg" alt="Logo til Østbø" />
            </div>
        </section>
    );
}

export { FeatureSection, MemberCallToAction, SponsorsSection, VideoHero };
