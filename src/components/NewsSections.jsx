function NewsFilter() {
    return (
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
                        <input type="text" id="news-date-filter" name="news-date-filter" placeholder="dd.mm.åååå" autoComplete="off" />
                        <button type="button" id="clear-news-filter" className="news-filter__reset">Vis alle</button>
                    </div>
                    <p id="news-filter-status" className="news-filter__status" aria-live="polite">Viser alle nyheter.</p>
                </div>
            </div>
        </section>
    );
}

function PaginationTargets({ pageCount }) {
    return (
        <div className="pagination-targets" aria-hidden="true">
            {Array.from({ length: pageCount }, (_, index) => (
                <span key={index + 1} id={`feed-page-${index + 1}`}></span>
            ))}
        </div>
    );
}

function NewsCard({ article }) {
    return (
        <article className="news-card" data-date={article.date}>
            <p className="meta">{article.meta}</p>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
        </article>
    );
}

function FeedPagination({ pageNumber, pageCount }) {
    return (
        <nav className="feed-pagination" aria-label="Paginering nyhetsoversikt">
            {pageNumber > 1 && <a href={`#feed-page-${pageNumber - 1}`}>Forrige side</a>}
            <span className="page-indicator">Side {pageNumber} av {pageCount}</span>
            {pageNumber < pageCount && <a href={`#feed-page-${pageNumber + 1}`}>Neste side</a>}
        </nav>
    );
}

function NewsPage({ page, pageCount }) {
    return (
        <div className={`news-page page-${page.number}`}>
            {page.articles.map((article) => (
                <NewsCard key={article.date} article={article} />
            ))}

            <FeedPagination pageNumber={page.number} pageCount={pageCount} />
        </div>
    );
}

function NewsFeed({ pages }) {
    return (
        <section className="news-feed" aria-label="Nyhetsoversikt">
            {pages.map((page) => (
                <NewsPage key={page.number} page={page} pageCount={pages.length} />
            ))}
        </section>
    );
}

export { NewsFeed, NewsFilter, PaginationTargets };
