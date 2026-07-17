import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function ActiveNavigation({ links }) {
    const { pathname } = useLocation();
    const [activePath, setActivePath] = useState(pathname);

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    return (
        <nav aria-label="Hovednavigasjon">
            <ul>
                {links.map(({ to, label, className }) => {
                    const isActive = to === activePath;

                    return (
                        <li key={to} className={isActive ? 'is-active' : undefined}>
                            <Link
                                to={to}
                                className={`${className ?? ''}${isActive ? ' is-active' : ''}`}
                                //onClick={() => setActivePath(to)}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default ActiveNavigation;
