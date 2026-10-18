import Main from '../components/Main';
import { homeParagraphs, siteName } from '../data/ResumeData';

export default function Home() {
    return (
        <Main title="Welcome" tabTitle="Home">
            <img className="home-photo" src="/images/rahifah-headshot.png" alt={`Headshot of ${siteName}`} />
            {homeParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="home-text">{paragraph}</p>
            ))}
        </Main>
    );
}