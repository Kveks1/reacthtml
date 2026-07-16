import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const normalizePath = (path) => path.toLowerCase().replace(/\/+$/, '') || '/';

function ActiveNavigation({ links }) {
    const { pathname } = useLocation();
    const [activePath, setActivePath] = useState(() => normalizePath(pathname));

    useEffect(() => {
        setActivePath(normalizePath(pathname));
    }, [pathname]);

    return (
        <nav aria-label="Hovednavigasjon">
            <ul>
                {links.map(({ to, label, className }) => {
                    const isActive = normalizePath(to) === activePath;

                    return (
                        <li key={to} className={isActive ? 'is-active' : undefined}>
                            <Link
                                to={to}
                                className={`${className}${isActive ? ' is-active' : ''}`}
                                aria-current={isActive ? 'page' : undefined}
                                onClick={() => setActivePath(normalizePath(to))}
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
