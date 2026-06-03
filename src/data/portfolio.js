// Portfolio data — single source of truth for Yosia Yehezkiel Gurning's portfolio.
// All icons self-hosted under /img/icons/.

export const navLinks = [
  { id: 'hero',       label: 'Home',     idx: 1 },
  { id: 'about',      label: 'About',    idx: 2 },
  { id: 'skills',     label: 'Skills',   idx: 3 },
  { id: 'projects',   label: 'Projects', idx: 4 },
  { id: 'experience', label: 'Journey',  idx: 5 },
  { id: 'cv',         label: 'CV',       idx: 6 },
  { id: 'contact',    label: 'Contact',  idx: 7 }
]

export const marqueeWords = [
  'BACKEND ENGINEERING',
  'MOBILE SYSTEMS',
  'CLEAN ARCHITECTURE',
  'AI INTEGRATION',
  'FULLSTACK CRAFT',
  'GO / FLUTTER / LARAVEL'
]

export const stats = [
  { value: '9+', label: 'Projects shipped' },
  { value: '3+', label: 'Years building' },
  { value: '8',  label: 'Certifications' },
  { value: '∞',  label: 'Lines of Go' }
]

export const tech = [
  { name: 'Go',         level: 'Advanced',     icon: '/img/icons/go.png' },
  { name: 'Flutter',    level: 'Advanced',     icon: '/img/icons/flutter.png' },
  { name: 'Laravel',    level: 'Advanced',     icon: '/img/icons/laravel.svg' },
  { name: 'PHP',        level: 'Advanced',     icon: '/img/icons/php.png' },
  { name: 'JavaScript', level: 'Advanced',     icon: '/img/icons/javascript.png' },
  { name: 'Python',     level: 'Intermediate', icon: '/img/python.png' },
  { name: 'FastAPI',    level: 'Intermediate', icon: '/img/FastAPI.png' },
  { name: 'Vue.js',     level: 'Intermediate', icon: '/img/icons/vue.png' },
  { name: 'Node.js',    level: 'Beginner',     icon: '/img/icons/node.png' },
  { name: 'Tailwind',   level: 'Advanced',     icon: '/img/icons/tailwind.svg' },
  { name: 'C#',         level: 'Intermediate', icon: '/img/icons/csharp.svg' },
  { name: 'React',      level: 'Beginner',     icon: '/img/icons/react.png' }
]

export const tools = [
  { name: 'Git',            role: 'Version Control', icon: '/img/icons/git.png' },
  { name: 'GitHub',         role: 'Git Hosting',     icon: '/img/icons/github.png' },
  { name: 'Docker',         role: 'Containers',      icon: '/img/icons/docker.png' },
  { name: 'MySQL',          role: 'Database',        icon: '/img/icons/mysql.png' },
  { name: 'PostgreSQL',     role: 'Database',        icon: '/img/icons/postgres.png' },
  { name: 'MongoDB',        role: 'Database',        icon: '/img/icons/mongodb.png' },
  { name: 'Postman',        role: 'API Testing',     icon: '/img/icons/postman.png' },
  { name: 'VS Code',        role: 'Editor',          icon: '/img/icons/vscode.png' },
  { name: 'Android Studio', role: 'Mobile IDE',      icon: '/img/icons/android-studio.svg' },
  { name: 'IntelliJ IDEA',  role: 'JVM IDE',         icon: '/img/icons/intellij.png' },
  { name: 'Jenkins',        role: 'CI/CD',           icon: '/img/icons/jenkins.svg' },
  { name: 'Figma / Miro',   role: 'Design',          icon: '/img/icons/figma.svg' }
]

export const projects = [
  {
    id: 'agrimatch',
    name: 'Agrimatch — Smart Farming',
    role: 'Backend · AI Engineer',
    category: 'Mobile + AI',
    image: '/img/portfolio-agrimatch.png',
    description: 'A national semifinalist project at Samsung Solve For Tomorrow 2025. Mobile platform combining Flutter, FastAPI, a CNN-based soil-classifier and an LLM consultation layer to onboard novice farmers into digital agriculture with measurable, AI-assisted recommendations.',
    tech: ['Flutter', 'FastAPI', 'Python', 'CNN', 'LLM'],
    github: 'https://github.com/yosiagurning/AgrimatchAI.git',
    demo: null,
    featured: true
  },
  {
    id: 'partoba',
    name: 'Partoba — Market Monitor',
    role: 'Frontend Engineer',
    category: 'Gov-Tech',
    image: '/img/portfolio-partoba.png',
    description: 'Operational mobile and web interface deployed for the Toba Regency Department of Trade and Industry (KOPERINDAG) to monitor and regulate market commodity prices in real time. Built with Flutter and Laravel, prioritising responsive data entry and field-grade resilience.',
    tech: ['Flutter', 'Laravel', 'REST API'],
    github: 'https://github.com/yosiagurning/Frontend_Laravel.git',
    demo: null
  },
  {
    id: 'go-partoba',
    name: 'Partoba — Go Backend',
    role: 'Backend Engineer',
    category: 'Backend / Auth',
    image: '/img/portfolio-go.png',
    description: 'High-performance Golang backend powering the Partoba platform. Implements JWT-based authentication, role-aware authorization, structured logging and clean separation between handlers, services and repositories for long-term maintainability.',
    tech: ['Go', 'JWT', 'PostgreSQL', 'REST'],
    github: 'https://github.com/yosiagurning/go-backend.git',
    demo: null
  },
  {
    id: 'fastapi',
    name: 'Agrimatch — FastAPI Core',
    role: 'AI Backend Engineer',
    category: 'AI Backend',
    image: '/img/portfolio-fast.png',
    description: "Python micro-service that orchestrates Agrimatch's CNN inference and LLM consultations, exposes REST endpoints to the Flutter client and persists structured agricultural data into PostgreSQL with versioned migrations.",
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'AI/ML'],
    github: 'https://github.com/yosiagurning/AgrimatchAI.git',
    demo: null
  },
  {
    id: 'perpustakaan',
    name: 'Library Management Suite',
    role: 'Backend Engineer',
    category: 'Enterprise',
    image: '/img/portfolio-perpustakaan.png',
    description: 'End-to-end library management application built in C# with a layered REST API for loan tracking, member records and inventory operations. Designed around structured data flow and clean repository patterns for predictable maintenance.',
    tech: ['C#', '.NET', 'REST API'],
    github: 'https://github.com/yosiagurning/Aplikasi-Perpustakaan.git',
    demo: null
  },
  {
    id: 'uts',
    name: 'Clean Architecture / Go',
    role: 'Architect',
    category: 'Architecture',
    image: '/img/portfolio-UTS.png',
    description: "Mid-semester architecture exercise for the Software Design Architecture course: a Go service built strictly on Uncle Bob's Clean Architecture with handlers, use-cases, repositories and entities — branched and refactored into a microservice topology in a second iteration.",
    tech: ['Go', 'Clean Arch', 'Microservices'],
    github: 'https://github.com/yosiagurning/UTS-RPL-APPL-11423049',
    demo: null
  },
  {
    id: 'warehouse',
    name: 'Warehouse Management System',
    role: 'Backend Engineer',
    category: 'Logistics',
    image: '/img/portfolio-warehouse.png',
    description: 'Laravel-based WMS engineered for SME warehouses: stock ledger, inbound/outbound transactions, authenticated multi-role access and a real-time operational dashboard backed by a normalised MySQL schema. Regularly hardened through structured QA cycles.',
    tech: ['Laravel', 'MySQL', 'Tailwind'],
    github: 'https://github.com/yosiagurning/warehouse-project',
    demo: null
  },
  {
    id: 'dasi',
    name: 'DASI × DALIS — Capstone',
    role: 'Data & System Lead',
    category: 'Research',
    image: '/img/portfolio-DASI.png',
    description: 'Final capstone for the Data Analysis & Information Systems and System Development courses. Combines structured data analysis with collaborative system design, executed in a five-person team under formal engineering rituals.',
    tech: ['Python', 'Data Analysis', 'System Design'],
    github: 'https://github.com/Hyzity/Kelompok-5-DASI-DALIS',
    demo: null
  },
  {
    id: 'field',
    name: 'Field Booking Platform',
    role: 'Fullstack Engineer',
    category: 'Web App',
    image: '/img/portfolio-field.png',
    description: 'Final exam project for the Web Development II course at IT Del: a Laravel-powered field booking website with conflict-free scheduling, admin dashboard, transaction monitoring and a polished UX layer in JavaScript.',
    tech: ['Laravel', 'JavaScript', 'MySQL'],
    github: 'https://github.com/yosiagurning/boking-lapangan-with-laravel-10',
    demo: null
  }
]

export const experiences = [
  { date: 'MAY 2026',       title: 'AWS re/Start — Microsoft Program',          org: 'Amazon Web Services × Microsoft',     description: 'Cloud-computing fundamentals: deployment topologies, server management and cloud-native DevOps practices.' },
  { date: 'MAR 2026',       title: 'Cloud & Generative AI Foundations',         org: 'Dicoding Indonesia × AWS',            description: 'Hands-on with AWS primitives, generative AI services and serverless workflows in production-grade environments.' },
  { date: 'FEB 2026',       title: 'Belajar Dasar AI',                          org: 'Dicoding Indonesia',                  description: 'Foundational artificial intelligence: classical ML, deep learning concepts and applied AI implementation.' },
  { date: 'DEC 2025',       title: 'HCIA — AI V4.0 (Colombia Track)',           org: 'Huawei ICT Academy',                  description: 'International AI training program: data communication, intelligent networks and enterprise AI infrastructure.' },
  { date: 'OCT 2025',       title: 'National Semifinalist — Agrimatch',         org: 'Samsung Solve For Tomorrow 2025',     description: 'Reached the national semifinal stage by leading the backend & AI engineering of Agrimatch, a Flutter + Go + Python agritech platform.' },
  { date: '2023 — PRESENT', title: 'B.A.Sc. Software Engineering Tech.',        org: 'Institut Teknologi Del — GPA 3.19',   description: 'Applied software engineering programme focused on backend systems, mobile development and software architecture.' },
  { date: '2024',           title: 'International Research Collaboration',      org: 'Singapore Institute of Technology',   description: 'Cross-institution case studies in data analysis and structured system development with peers and mentors from SIT.' }
]

export const contacts = [
  { id: 'email',    label: 'Email',    value: 'yosiagurning@gmail.com',     href: 'mailto:yosiagurning@gmail.com' },
  { id: 'phone',    label: 'Phone',    value: '+62 812 6097 0457',          href: 'tel:+6281260970457' },
  { id: 'linkedin', label: 'LinkedIn', value: 'in/yosia-yehezkiel-gurning', href: 'https://www.linkedin.com/in/yosia-yehezkiel-gurning' },
  { id: 'github',   label: 'GitHub',   value: 'github.com/yosiagurning',    href: 'https://github.com/yosiagurning' }
]

export const cvUrl = '/assets/CV_Yosia_Yehezkiel_Gurning.pdf'
export const portraitUrl = '/assets/yosia.jpg'
