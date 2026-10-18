export const siteName = 'Rahifah Rahman';
export const siteSubtitle = 'My Online Resume';

export const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Involvement', path: '/involvement' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
];

export interface ResumeItem {
    title: string;
    lines?: string[];
    bulletsTitle?: string;
    bullets?: string[];
}

export const homeParagraphs = [
    'My name is Rahifah Rahman, and I am a Computer Science student at Boston University. I am curious about how technology can be used to bring people, ideas, and organizations together. I enjoy learning how things work, finding creative solutions to problems, and taking on opportunities that allow me to grow both technically and personally.',
    'My experiences in software development, web applications, research, and student organizations have strengthened my interest in pursuing a career in project or product management, systems analysis, and enterprise technology, where I can combine my technical background with my interests in communication, organization, and collaboration.',
    'Outside of technology, I am always looking for something new to explore, whether that means experimenting with a new baking idea, finding a book café to get lost in, picking up a good book, or traveling somewhere new and adventurous. I am excited to continue learning, exploring, and discovering where my interests can take me.',
];

export const educationItems: ResumeItem[] = [
    {
        title: 'Boston University',
        lines: ['Bachelor of Arts in Computer Science', 'May 2027'],
        bulletsTitle: 'Relevant Coursework:',
        bullets: [
            'Combinatory Structures',
            'Geometric Algorithms',
            'Probability in Computing',
            'Analysis of Algorithms',
            'Web Application Development',
            'Machine Learning',
            'Artificial Intelligence',
            'Theory of Computation',
        ],
    },
    {
        title: 'Cypress Ranch High School',
        lines: ['Distinguished Diploma with STEM Endorsements', 'August 2020 - May 2023'],
    },
];

export const experienceItems: ResumeItem[] = [
    {
        title: 'Data & Application Development Intern',
        lines: ['MetroNational', 'June - August 2026'],
        bullets: [
            'Developed automated testing solutions to improve the reliability and efficiency of internal web applications.',
            'Designed end-to-end test workflows, validating application functionality, data integrity, user interactions, and persistent application states.',
            'Applied debugging, problem-solving, and analytical skills to address technical challenges while adapting testing approaches to project needs.',
            'Collaborated with development and cross-functional teams through regular meetings and stand-ups to communicate progress, discuss challenges, and align work with project objectives.',
        ],
    },
    {
        title: 'Mailroom Assistant',
        lines: ['Boston University', 'October 2024 - May 2025'],
        bullets: [
            'Sorted and organized packages to ensure efficient pickup.',
            'Signed in and out packages accurately.',
            'Assisted in problem-solving related to package-related issues.',
        ],
    },
    {
        title: 'Center Assistant',
        lines: ['Kumon Math and Reading Center', 'October 2022 - February 2023', 'November 2019 - March 2020'],
        bullets: [
            'Graded and recorded student coursework.',
            'Provided one-on-one instruction to students and progress updates.',
            'Assisted with creating individualized learning plans and schedules.',
            'Maintained a structured, productive, and clean environment for students.',
        ],
    },
];

export const involvementItems: ResumeItem[] = [
    {
        title: 'Research on Safe and Responsible AI for Communication Accessibility',
        lines: ['Co-authored paper: “Adoption of Safe and Responsible AI for Streamlining Communication with Verbally Impaired Communities” — Accepted at IEEE International Conference on AI and Data Analytics'],
    },
    {
        title: 'Women in Computer Science (WiCS) – Member',
        lines: ['Participated in workshops and events to support women pursuing Computer Science and strengthen technical skills'],
    },
    {
        title: 'Coding Exchange - Programmer',
        lines: ['Student-led initiative focused on teaching computer science to students in underserved countries by designing, teaching, and funding courses and materials'],
    },
    {
        title: 'Harriet E. Richards (HER) Cooperative House - Resident & Head of Events Committee',
        lines: ['Active house member contributing to shared responsibilities, community decisions, and the upkeep of a collaborative living environment. Lead the Events Committee in planning and coordinating house events, managing logistics, and working with residents to foster community engagement'],
    },
    {
        title: 'Queer Activist Collective - Treasurer and Event Coordinator',
        lines: ['Budget, plan, and organize events to raise awareness and promote inclusivity for LGBTQ+ issues on campus'],
    },
    {
        title: 'Boston University Abroad Program - Student Abroad Ambassador',
        lines: ['Immersed in international academic and cultural experiences as part of a semester-long program in Sydney, Australia while promoting cultural exchange and international study for students.'],
    },
];

export const skillItems: ResumeItem[] = [
    { title: 'Programming Languages', bullets: ['Python', 'JavaScript', 'Java', 'HTML', 'C', 'C++', 'SQL', 'PHP', 'CSS', 'OCaml'] },
    { title: 'Technical Tools & Platforms', bullets: ['GitHub', 'Microsoft Azure', 'VSCode', 'MySQL', 'MongoDB', 'Playwright', 'Node.js'] },
    {
        title: 'Conceptual & Theoretical Skills',
        bullets: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Database Management',
            'Software Development Life Cycle',
            'Machine Learning',
            'UI Test Automation',
            'Web Development',
            'Artificial Intelligence',
            'Data Analysis',
        ],
    },
    { title: 'Interests/Hobbies', bullets: ['Experimental Baking', 'Reading', 'Exploring Book Cafes', 'Travelling'] },
];