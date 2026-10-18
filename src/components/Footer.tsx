import { Link } from 'react-router-dom';
import { siteName } from '../data/ResumeData';

export default function Footer() {
    return (
        <footer>
            <p>
                All Rights Reserved by {siteName} &copy; <Link to="/credits">Credits</Link>
            </p>
        </footer>
    );
}