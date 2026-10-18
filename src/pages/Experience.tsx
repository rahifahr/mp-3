import Main from '../components/Main';
import ResumeList from '../components/ResumeList';
import { experienceItems } from '../data/ResumeData';

export default function Experience() {
    return (
        <Main title="Experience">
            <ResumeList items={experienceItems} />
        </Main>
    );
}