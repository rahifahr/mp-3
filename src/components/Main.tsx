import type { ReactNode } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

interface MainProps {
    title: string;
    tabTitle?: string;
    children: ReactNode;
}

export default function Main({ title, tabTitle, children }: MainProps) {
    usePageTitle(tabTitle ?? title);

    return (
        <main>
            <h2>{title}</h2>
            <section className="content">{children}</section>
        </main>
    );
}