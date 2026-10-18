import ResumeEntry from './ResumeEntry';
import type { ResumeItem } from '../data/ResumeData';

interface ResumeListProps {
    items: ResumeItem[];
}

export default function ResumeList({ items }: ResumeListProps) {
    return (
        <>
            {items.map((item) => (
                <ResumeEntry key={item.title} {...item} />
            ))}
        </>
    );
}