import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div class="club-logo footer">
                <a href="index.html" aria-label="Hjem">
                    <img src="assets/images/Logo.svg" alt="" />

                    <span>BODØ BOKSEKLUBB</span>
                </a>
            </div>

            <nav aria-label="Kontaktinformasjon">
                <ul>
                    <li><a href="pages/kontakt.html">Kontakt oss</a></li>
                </ul>
            </nav>

            <div class="social media">
                <nav aria-label="Sosiale medier">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/bodobokseklubb/" aria-label="Instagram">
                                <img src="assets/icons/instagram.svg" alt="" />
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.facebook.com/BodoBokseklubb" aria-label="Facebook">
                                <img src="assets/icons/facebook.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </footer>
        );
    }
}

export default Footer;