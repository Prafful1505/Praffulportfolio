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
  'I build and ship production AI systems at Target Dial. Autonomous voice and SMS agents on the Claude SDK and MCP, the prompt schemas and routing that keep them accurate, and the pipelines that connect them to the systems a business already runs on.',
  'I lead the implementation team now, which means I stay with a build from the first scoping call through to the handover. Before Target Dial I was an intern at Young Thames LLP writing data pipelines and SQL. I graduated in artificial intelligence and data science from MITS Gwalior in 2026.',
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
      'FastAPI backend pipeline with Whisper for transcription and GROQ for generation, fast enough that the conversation does not stall.',
      'JSON payload structures and context windows tuned so the multimodal replies come back structured rather than freeform.',
      'Feedback relevance was checked against a scored sample rather than assumed.',
    ],
    stack: ['Python', 'FastAPI', 'Whisper', 'GROQ API'],
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
      'End to end exploratory analysis over large relational datasets in Python and SQL.',
      'Complex queries and aggregations that reshape the tables for predictive modelling and trend work.',
      'Churn drivers by segment, tested rather than eyeballed, with the size of each segment attached.',
    ],
    stack: ['Python', 'SQL', 'Pandas', 'Power BI'],
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
    period: 'Aug 2026 to now',
    title: 'Implementation Team Manager',
    org: 'Target Dial',
    note: 'Promoted from Forward Deployed Engineer',
    points: [
      'Run implementation end to end: scoping, delivery planning, and the handover into production.',
      'Set how agent and automation builds get put together, so the next deployment is not started from scratch.',
      'Sit between clients and the engineers to keep business goals and technical work pointed the same way.',
    ],
  },
  {
    period: 'Sep 2025 to Aug 2026',
    title: 'Forward Deployed Engineer',
    org: 'Target Dial',
    points: [
      'Built production autonomous voice and SMS agents on the Claude SDK and MCP to handle enterprise lead qualification.',
      'Designed the prompt engineering schemas and routing that let an agent hold live context from several client sources at once, taking response accuracy to 92%.',
      'Wired LLM orchestration into Salesforce and GoHighLevel over REST, which replaced manual tracking and saved more than 15 hours a week.',
    ],
  },
  {
    period: 'May to Aug 2025',
    title: 'Data Scientist Intern',
    org: 'Young Thames LLP',
    points: [
      'Built automated pipelines for structured and unstructured relational data, cutting reporting turnaround by 30%.',
      'Validated and optimised the SQL behind cross functional dashboards so the numbers held up.',
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
  {
    name: 'Oracle Cloud Infrastructure 2025 Foundations Associate',
    issuer: 'Oracle',
    year: 'September 2025',
  },
];

export const toolkit = [
  {
    label: 'AI & ML',
    items: [
      'Large language models',
      'Prompt engineering',
      'RAG',
      'Claude SDK',
      'MCP',
      'LangChain',
      'Machine learning',
    ],
  },
  {
    label: 'Technical',
    items: [
      'Python (Pandas, NumPy, Scikit-Learn)',
      'SQL',
      'FastAPI',
      'REST APIs',
      'JSON',
      'Git',
      'n8n',
      'Unix/Linux',
    ],
  },
  {
    label: 'Cloud & data',
    items: ['AWS (S3, EC2, Lambda)', 'Oracle Cloud Infrastructure', 'MySQL', 'ETL pipelines', 'Power BI'],
  },
  {
    label: 'How I work',
    items: ['Analytical thinking', 'System architecture', 'Technical documentation', 'Problem solving'],
  },
];

export const sections = [
  { id: 'top', label: 'Intro', index: '00' },
  { id: 'work', label: 'Work', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'toolkit', label: 'Toolkit', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
];
