import { useEffect } from 'react';
import { siteName } from '../data/ResumeData';

// Course format: Child | Parent
export function usePageTitle(child: string): void {
    useEffect(() => {
        document.title = `${child} | ${siteName}`;
    }, [child]);
}