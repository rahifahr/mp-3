import Main from '../components/Main';
import ResumeList from '../components/ResumeList';
import { skillItems } from '../data/ResumeData';

export default function Skills() {
    return (
        <Main title="Skills">
            <ResumeList items={skillItems} />
        </Main>
    );
}