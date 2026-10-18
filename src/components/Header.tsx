import Nav from './Nav';
import { siteName, siteSubtitle } from '../data/ResumeData';

export default function Header() {
    return (
        <header>
            <h1>{siteName}</h1>
            <p>{siteSubtitle}</p>
            <Nav />
        </header>
    );
}