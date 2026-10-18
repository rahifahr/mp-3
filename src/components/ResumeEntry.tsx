import type { ResumeItem } from '../data/ResumeData';

export default function ResumeEntry({ title, lines, bulletsTitle, bullets }: ResumeItem) {
    return (
        <article>
            <h3>{title}</h3>
            {lines?.map((line) => (
                <p key={line}>{line}</p>
            ))}
            {bulletsTitle && <h4>{bulletsTitle}</h4>}
            {bullets && (
                <ul>
                    {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}