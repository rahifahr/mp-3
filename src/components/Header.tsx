import Nav from './Nav';
import { siteName, siteSubtitle } from '../data/ResumeData';

// Same structure as MP-1: the nav lives inside the header (a fixed sidebar on wide screens).
export default function Header() {
    return (
        <header>
            <h1>{siteName}</h1>
            <p>{siteSubtitle}</p>
            <Nav />
        </header>
    );
}