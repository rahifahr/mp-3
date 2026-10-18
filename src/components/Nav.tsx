import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/ResumeData';

export default function Nav() {
    return (
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink to={link.path} end={link.path === '/'}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}