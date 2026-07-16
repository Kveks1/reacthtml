import { useState } from 'react';

function TrainingLevelSelector({ title, description, levels = [], defaultLevelId }) {
    const firstLevelId = levels[0]?.id ?? '';
    const [selectedLevelId, setSelectedLevelId] = useState(defaultLevelId ?? firstLevelId);
    const selectedLevel = levels.find((level) => level.id === selectedLevelId) || levels[0];

    return (
        <section className="training-selector" aria-labelledby="training-selector-title">
            <div className="training-selector__intro">
                <h2 id="training-selector-title">{title}</h2>
                <p>{description}</p>
            </div>

            <div className="training-selector__buttons" role="tablist" aria-label="Velg treningsgruppe">
                {levels.map((level) => {
                    const isActive = selectedLevel && level.id === selectedLevel.id;

                    return (
                        <button
                            key={level.id}
                            type="button"
                            className={`training-selector__button${isActive ? ' is-active' : ''}`}
                            onClick={() => setSelectedLevelId(level.id)}
                            aria-pressed={isActive}
                        >
                            {level.label}
                        </button>
                    );
                })}
            </div>

            {selectedLevel && (
                <article className="training-selector__card" aria-live="polite">
                    <span className="training-selector__tag">{selectedLevel.tag}</span>
                    <h3>{selectedLevel.heading}</h3>
                    <p>{selectedLevel.text}</p>

                    <ul className="training-selector__details">
                        {selectedLevel.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                </article>
            )}
        </section>
    );
}

export default TrainingLevelSelector;
