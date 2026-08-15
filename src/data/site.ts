export const profile = {
  name: 'Prafful Agrawal',
  role: 'Implementation Team Manager',
  tagline: 'I turn messy data into decisions — and AI prototypes into shipped products.',
  summary:
    'Implementation Team Manager at Target Dial, leading the delivery of AI agents, data pipelines and analytics that customers use every day. Comfortable across Python, SQL, Power BI, LLM tooling and cloud.',
  location: 'Gwalior, India',
  email: 'aprafful15@gmail.com',
  phone: '+91 7879059862',
  phoneHref: 'tel:+917879059862',
  whatsapp:
    'https://wa.me/917879059862?text=Hi%20Prafful%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!',
  linkedin: 'https://www.linkedin.com/in/prafful-agrawal-b6b085293/',
  github: 'https://github.com/Prafful1505',
  resume: '/Prafful_Agrawal_Resume.pdf',
  availability: 'Open to data, AI & delivery opportunities',
};

export const stats = [
  { value: '2026', label: 'Promoted to Implementation Team Manager' },
  { value: '10+', label: 'Data & AI projects shipped' },
  { value: '85%', label: 'Peak model feedback relevance' },
  { value: '4+', label: 'Analytics dashboards delivered' },
];

export const marqueeSkills = [
  'Python',
  'SQL',
  'Power BI',
  'Pandas',
  'NumPy',
  'Machine Learning',
  'LangChain',
  'RAG',
  'AWS',
  'MySQL',
  'TypeScript',
  'n8n',
  'Whisper',
  'Statistics',
  'ETL',
  'Git',
];

export type SkillGroup = {
  title: string;
  blurb: string;
  accent: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Analytics & BI',
    blurb: 'Turning raw tables into narratives stakeholders act on.',
    accent: 'from-sky-400 to-blue-600',
    skills: ['Exploratory Analysis', 'Data Cleaning', 'Power BI & DAX', 'Dashboards', 'Excel Modelling'],
  },
  {
    title: 'Languages & Data',
    blurb: 'The everyday toolkit for querying, shaping and shipping data.',
    accent: 'from-emerald-400 to-teal-600',
    skills: ['Python (Pandas, NumPy)', 'SQL / MySQL', 'TypeScript', 'Java', 'ETL Pipelines'],
  },
  {
    title: 'AI & Machine Learning',
    blurb: 'From classical models to retrieval-augmented LLM systems.',
    accent: 'from-fuchsia-400 to-violet-600',
    skills: ['Machine Learning', 'RAG', 'LangChain', 'OCR / Whisper', 'Statistical Analysis'],
  },
  {
    title: 'Cloud & Automation',
    blurb: 'Wiring services together so the workflow runs without me.',
    accent: 'from-amber-400 to-orange-600',
    skills: ['AWS', 'Oracle Cloud (OCI)', 'n8n / Make.com', 'RetellAI', 'Git & Jupyter'],
  },
];

export type TimelineItem = {
  kind: 'work' | 'education' | 'award';
  period: string;
  title: string;
  org: string;
  meta?: string;
  points: string[];
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    kind: 'work',
    period: 'Aug 2026 — Present',
    title: 'Implementation Team Manager',
    org: 'Target Dial',
    meta: 'Promoted from Forward Deployed Engineer',
    points: [
      'Lead the implementation team end to end — scoping customer requirements, planning delivery and owning the handover into production.',
      'Set the technical standards for AI agent and automation builds so every deployment is repeatable rather than bespoke.',
      'Partner with clients and internal stakeholders to translate business goals into measurable analytics and workflow outcomes.',
    ],
    tags: ['Team Leadership', 'Solution Design', 'Client Delivery', 'AI Automation'],
  },
  {
    kind: 'work',
    period: 'Sep 2025 — Aug 2026',
    title: 'Forward Deployed Engineer',
    org: 'Target Dial',
    points: [
      'Designed and deployed AI-powered conversational agents with RetellAI and no-code automation (n8n, Make.com), improving lead qualification efficiency.',
      'Engineered scalable workflows integrating multiple APIs and optimised data pipelines for analytics-driven performance monitoring.',
      'Applied NLP techniques to interaction data, surfacing patterns that improved model accuracy and user experience.',
    ],
    tags: ['RetellAI', 'n8n', 'APIs', 'NLP'],
  },
  {
    kind: 'work',
    period: 'May 2025 — Jul 2025',
    title: 'Data Scientist Intern',
    org: 'Young Thames',
    points: [
      'Performed in-depth cleaning, aggregation and exploratory analysis of CRM and public datasets to extract actionable insights.',
      'Automated reporting pipelines and delivered dashboards that supported day-to-day business decisions.',
      'Partnered with stakeholders on reporting requirements, optimising visualisation in Power BI and Excel.',
    ],
    tags: ['Python', 'Power BI', 'Excel', 'CRM Data'],
  },
  {
    kind: 'education',
    period: '2022 — 2026',
    title: 'B.Tech, Artificial Intelligence & Data Science',
    org: 'Madhav Institute of Technology and Science, Gwalior',
    meta: 'CGPA 7.2 / 10.0',
    points: ['Coursework spanning the full analytics stack, from statistics through to applied machine learning.'],
    tags: ['Data Analytics', 'Statistics', 'Data Visualization', 'Database Systems', 'Machine Learning'],
  },
  {
    kind: 'award',
    period: '2024 — 2025',
    title: 'Certifications & Leadership',
    org: 'Oracle · NPTEL · MITS',
    points: [
      'Oracle Cloud Infrastructure 2025 Foundations Associate — certified by Oracle.',
      'Data Analytics with Python — NPTEL certified (2025).',
      'Management Head, Science Club, MITS (2024–2025).',
    ],
  },
];

export type Project = {
  title: string;
  period: string;
  summary: string;
  highlight: string;
  accent: string;
  icon: 'brain' | 'trending' | 'image' | 'chart';
  features: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Multimodal Language Assistant',
    period: 'Jan 2025 — Mar 2025',
    summary:
      'An AI practice partner that listens, transcribes and coaches — built on Whisper for speech and GROQ for low-latency generation, wrapped in a Gradio interface.',
    highlight: '85% feedback relevance',
    accent: 'from-indigo-400 via-violet-500 to-fuchsia-500',
    icon: 'brain',
    features: [
      'Multimodal audio + text input pipeline',
      'Whisper transcription with GROQ-hosted LLM feedback',
      'Relevance validated through quantitative analysis',
      'Interactive Gradio front-end for live practice',
    ],
    tech: ['Python', 'Whisper', 'GROQ API', 'Gradio', 'NLP'],
    link: 'https://github.com/Prafful1505/MultimodalLanguageLearningAssistant-',
    featured: true,
  },
  {
    title: 'Image-Based QA with RAG',
    period: 'Dec 2024 — Jan 2025',
    summary:
      'A retrieval-augmented system that reads images with OCR, embeds the extracted text and answers questions grounded in what it actually saw.',
    highlight: '80% answer accuracy',
    accent: 'from-rose-400 via-pink-500 to-fuchsia-500',
    icon: 'image',
    features: [
      'Tesseract OCR pipeline for text extraction',
      'LangChain retrieval with MiniLM embeddings',
      'Chunking and prompt tuning for grounded answers',
      'EDA-driven retrieval optimisation',
    ],
    tech: ['Python', 'Tesseract OCR', 'LangChain', 'RAG', 'MiniLM'],
    link: 'https://github.com/Prafful1505/image_qa_rag',
  },
  {
    title: 'Media & Entertainment Stock Dashboard',
    period: 'Feb 2025 — Mar 2025',
    summary:
      'Power BI reporting over a star-schema model that tracks stock performance and KPIs across major media firms, refreshed by an automated ETL flow.',
    highlight: 'Star-schema model',
    accent: 'from-sky-400 via-blue-500 to-indigo-500',
    icon: 'trending',
    features: [
      'Multi-source dataset integration into one model',
      'DAX measures for moving averages, returns and ratios',
      'Dynamic slicers for sector and company drill-down',
      'Automated ETL for cleansing and transformation',
    ],
    tech: ['Power BI', 'DAX', 'ETL', 'Excel'],
  },
  {
    title: 'Telecom Churn Analytics',
    period: 'Oct 2024 — Nov 2024',
    summary:
      'Customer-level churn analysis in Python and SQL, translated into a dashboard that points retention teams at the segments actually at risk.',
    highlight: 'Retention insights',
    accent: 'from-emerald-400 via-teal-500 to-cyan-500',
    icon: 'chart',
    features: [
      'Churn driver analysis across customer segments',
      'Interactive Power BI dashboard of churn trends',
      'Statistical testing of behavioural patterns',
      'Actionable recommendations for retention',
    ],
    tech: ['Python', 'SQL', 'Power BI', 'Pandas'],
    link: 'https://github.com/Prafful1505/telecom-churn',
    featured: true,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
