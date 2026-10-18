import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Involvement from './pages/Involvement';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Credits from './pages/Credits';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'education', element: <Education /> },
            { path: 'experience', element: <Experience /> },
            { path: 'involvement', element: <Involvement /> },
            { path: 'skills', element: <Skills /> },
            { path: 'projects', element: <Projects /> },
            { path: 'credits', element: <Credits /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}