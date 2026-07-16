function PriceCard({ price }) {
    return (
        <a className="price-card" href={price.href}>
            <h2>{price.name}</h2>
            <h2>{price.amount}</h2>
        </a>
    );
}

function MembershipPrices({ prices }) {
    return (
        <section className="prices">
            {prices.map((price) => (
                <PriceCard key={price.name} price={price} />
            ))}
        </section>
    );
}

export default MembershipPrices;
