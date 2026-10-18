import { useEffect } from 'react';
import { siteName } from '../data/ResumeData';

export function usePageTitle(child: string): void {
    useEffect(() => {
        document.title = `${child} | ${siteName}`;
    }, [child]);
}