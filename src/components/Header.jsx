import ActiveNavigation from './ActiveNavigation';

const navigationLinks = [
    { to: '/kontakt', label: 'Kontakt oss', className: 'menu-link' },
    { to: '/trening', label: 'Trening', className: 'menu-link' },
    { to: '/aktuelt', label: 'Aktuelt', className: 'menu-link' },
    { to: '/priser', label: 'BLI MEDLEM', className: 'join-btn' },
];

function Header() {
    return (
        <header>
            <div className="club-logo">
                <a href="/" aria-label="Hjem">
                    <img src="/assets/images/Logo.svg" alt="" />
                    <span>BODØ BOKSEKLUBB</span>
                </a>
            </div>

            <input type="checkbox" id="hamburger-toggle" aria-hidden="true" />
            <label htmlFor="hamburger-toggle" className="hamburger-btn" aria-label="Åpne meny">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ActiveNavigation links={navigationLinks} />
        </header>
    );
}

export default Header;
