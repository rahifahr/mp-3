import Main from '../components/Main';
import ResumeList from '../components/ResumeList';
import { involvementItems } from '../data/ResumeData';

export default function Involvement() {
    return (
        <Main title="Involvement">
            <ResumeList items={involvementItems} />
        </Main>
    );
}