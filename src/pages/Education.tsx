import Main from '../components/Main';
import ResumeList from '../components/ResumeList';
import { educationItems } from '../data/ResumeData';

export default function Education() {
    return (
        <Main title="Education">
            <ResumeList items={educationItems} />
        </Main>
    );
}