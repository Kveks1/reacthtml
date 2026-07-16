function PageHero({ className = 'headline', title, action }) {
    return (
        <section className={className}>
            <h1>{title}</h1>
            {action && (
                <a href={action.href} className={action.className}>
                    {action.label}
                </a>
            )}
        </section>
    );
}

export default PageHero;
