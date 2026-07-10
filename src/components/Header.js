import React from 'react';

import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
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

            <nav aria-label="Hovednavigasjon">
                <ul>
                    <li><NavLink to="/kontakt" className="menu-link">Kontakt oss</NavLink></li>
                    <li><NavLink to="/trening" className="menu-link">Trening</NavLink></li>
                    <li><NavLink to="/aktuelt" className="menu-link">Aktuelt</NavLink></li>
                    <li><NavLink to="/priser" className="join-btn">BLI MEDLEM</NavLink></li>
                </ul>
            </nav>
            </header>
        );
    }
}

export default Header;
