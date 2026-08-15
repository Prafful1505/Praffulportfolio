export const profile = {
  name: 'Prafful Agrawal',
  role: 'Implementation Team Manager',
  titles: ['Implementation Team Manager', 'Prompt Engineer', 'Forward Deployed Engineer'],
  company: 'Target Dial',
  location: 'Gwalior, India',
  timeZone: 'Asia/Kolkata',
  email: 'aprafful15@gmail.com',
  phone: '+91 7879059862',
  phoneHref: 'tel:+917879059862',
  whatsapp: 'https://wa.me/917879059862',
  linkedin: 'https://www.linkedin.com/in/prafful-agrawal-b6b085293/',
  github: 'https://github.com/Prafful1505',
  resume: '/Prafful_Agrawal_Resume.pdf',
};

export const intro = [
  'I lead the implementation team at Target Dial. Most of my week goes into working out what a customer actually needs, writing the prompts and building the AI agents and data pipelines behind it, then staying with the work until it runs in production without me watching it.',
  'Before this I was a forward deployed engineer on the same team, and before that an intern cleaning CRM exports and building Power BI reports. I finish a B.Tech in artificial intelligence and data science at MITS Gwalior in 2026.',
];

export type Work = {
  index: string;
  title: string;
  period: string;
  result?: string;
  summary: string;
  detail: string[];
  stack: string[];
  link?: string;
};

export const work: Work[] = [
  {
    index: '01',
    title: 'Multimodal Language Assistant',
    period: 'Jan to Mar 2025',
    result: '85% feedback relevance',
    summary:
      'A practice partner for language learners. You speak, it transcribes, and it tells you what to fix.',
    detail: [
      'Whisper handles transcription, GROQ generates the feedback fast enough that the conversation does not stall.',
      'Feedback relevance was checked against a scored sample rather than assumed.',
      'Gradio front end so audio and text go through the same path.',
    ],
    stack: ['Python', 'Whisper', 'GROQ API', 'Gradio'],
    link: 'https://github.com/Prafful1505/MultimodalLanguageLearningAssistant-',
  },
  {
    index: '02',
    title: 'Image Based QA with RAG',
    period: 'Dec 2024 to Jan 2025',
    result: '80% answer accuracy',
    summary:
      'Ask a question about an image and get an answer grounded in the text the system actually read off it.',
    detail: [
      'Tesseract pulls the text, MiniLM embeddings index it, LangChain does the retrieval.',
      'Most of the work was in chunking and prompt shape. Retrieval quality moved the result far more than the model choice did.',
      'Accuracy measured on a fixed question set so changes were comparable.',
    ],
    stack: ['Python', 'Tesseract OCR', 'LangChain', 'MiniLM'],
    link: 'https://github.com/Prafful1505/image_qa_rag',
  },
  {
    index: '03',
    title: 'Telecom Churn Analytics',
    period: 'Oct to Nov 2024',
    summary:
      'Churn analysis at the customer level that ends in a dashboard a retention team can act on, not a notebook nobody opens.',
    detail: [
      'Churn drivers by segment in Python and SQL, tested rather than eyeballed.',
      'Power BI dashboard built around the questions the team kept asking.',
      'Recommendations tied to specific segments, with the size of each one attached.',
    ],
    stack: ['Python', 'SQL', 'Power BI', 'Pandas'],
    link: 'https://github.com/Prafful1505/telecom-churn',
  },
  {
    index: '04',
    title: 'Media & Entertainment Stock Dashboard',
    period: 'Feb to Mar 2025',
    summary:
      'Stock performance and KPIs for major media firms, on a star schema that survives new data sources being added.',
    detail: [
      'Several sources folded into one model instead of one report per source.',
      'DAX measures for moving averages, returns and ratios.',
      'Automated ETL for the cleaning, so a refresh is not a manual afternoon.',
    ],
    stack: ['Power BI', 'DAX', 'ETL', 'Excel'],
  },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  note?: string;
  points: string[];
};

export const roles: Role[] = [
  {
    period: '2026 to now',
    title: 'Implementation Team Manager',
    org: 'Target Dial',
    note: 'Promoted from Forward Deployed Engineer, August 2026',
    points: [
      'Run implementation end to end: scoping, delivery planning, and the handover into production.',
      'Set how agent and automation builds get put together, so the next deployment is not started from scratch.',
      'Sit between clients and the engineers to keep business goals and technical work pointed the same way.',
    ],
  },
  {
    period: '2025 to 2026',
    title: 'Forward Deployed Engineer, Prompt Engineer',
    org: 'Target Dial',
    points: [
      'Built and deployed conversational AI agents with RetellAI, wired together with n8n and Make.com.',
      'Wrote and iterated the prompts behind those agents, testing them against real call transcripts.',
      'Connected several APIs into workflows that could be monitored instead of guessed at.',
      'Used NLP on interaction data to find where the agents were losing people.',
    ],
  },
  {
    period: 'May to Jul 2025',
    title: 'Data Scientist Intern',
    org: 'Young Thames',
    points: [
      'Cleaned and analysed CRM and public datasets, then reported what was actually in them.',
      'Automated the reporting that was being redone by hand every week.',
      'Worked with stakeholders on what the dashboards needed to answer.',
    ],
  },
  {
    period: '2022 to 2026',
    title: 'B.Tech, Artificial Intelligence & Data Science',
    org: 'Madhav Institute of Technology and Science, Gwalior',
    note: 'CGPA 7.5 / 10',
    points: [
      'Coursework across statistics, database systems, data visualisation and machine learning.',
      'Management Head of the Science Club, 2024 to 2025.',
    ],
  },
];

export const certifications = [
  { name: 'Oracle Cloud Infrastructure 2025 Foundations Associate', issuer: 'Oracle', year: '2025' },
  { name: 'Data Analytics with Python', issuer: 'NPTEL', year: '2025' },
];

export const toolkit = [
  {
    label: 'Everyday',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'Git'],
  },
  {
    label: 'AI & ML',
    items: [
      'Prompt engineering',
      'LangChain',
      'RAG',
      'Whisper',
      'Tesseract OCR',
      'RetellAI',
      'Statistical analysis',
    ],
  },
  {
    label: 'Data & cloud',
    items: ['MySQL', 'ETL pipelines', 'AWS', 'Oracle Cloud', 'Jupyter'],
  },
  {
    label: 'Also written',
    items: ['TypeScript', 'Java', 'n8n', 'Make.com'],
  },
];

export const sections = [
  { id: 'top', label: 'Intro', index: '00' },
  { id: 'work', label: 'Work', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'toolkit', label: 'Toolkit', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
];
