export const profile = {
  name: 'Virlene Marchella',
  role: 'Computer Science Student',
  location: 'Bandung City, Indonesia',
  phone: '+62 857-8056-6306',
  email: 'virlenemarchella7@gmail.com',
  summary:
    'I am a fifth-semester Computer Science student at BINUS University who enjoys turning ideas into thoughtful, working software. My work sits at the intersection of engineering and design — I build with Python, Flutter, and SQL, explore applied AI and machine learning, and care deeply about the user experience behind every interface. Curious by nature and quick to learn, I take ownership of what I build and do my best work whether leading a task or collaborating within a team.',
  socials: [
    { label: 'LinkedIn', handle: 'Virlene Marchella', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', handle: 'mooninlene', href: 'https://github.com/mooninlene' },
    { label: 'Instagram', handle: '@vrlnclla', href: 'https://instagram.com/vrlnclla' },
    { label: 'TikTok', handle: '@mooninlene', href: 'https://tiktok.com/@mooninlene' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming & Database',
    items: ['Python', 'SQL (MySQL)', 'Dart', 'Flutter', 'Git / GitHub'],
  },
  {
    title: 'AI, Machine Learning & Simulation',
    items: ['Google Colab', 'MobileNetV4', 'YOLOv8', 'Python Numerical Simulation (PPE)'],
  },
  {
    title: 'UI/UX & Design',
    items: ['Figma', 'User-Centered Design', 'CapCut Pro', 'Content Creation'],
  },
  {
    title: 'E-Commerce & Digital',
    items: ['Shopee Seller Centre', 'TikTok Shop Seller Center', 'Social Media Management'],
  },
  {
    title: 'Soft Skills',
    items: [
      'Interpersonal Communication',
      'Teamwork',
      'Time Management',
      'Problem Solving',
      'Fast Learner',
    ],
  },
]

export type Project = {
  index: string
  title: string
  category: string
  description: string
  contribution: string
  features?: string[]
  tools: string[]
  note?: string
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'EcoGreen — Waste Classification',
    category: 'AOL Software Engineering & AI',
    description:
      'A deep learning–based mobile app that automates the identification and classification of waste into organic and recyclable categories, supporting more efficient urban waste management.',
    contribution:
      'Designed the layered system architecture and integrated the MobileNetV4 AI model for lightweight image classification along with YOLOv8 for real-time waste object detection.',
    features: [
      'Smart Scanner for instant scanning',
      'Trash Encyclopedia as an education hub',
      'Waste Map to locate the nearest waste banks',
      'Eco Badges — achievement-based gamification',
    ],
    tools: ['Flutter', 'Dart', 'Python', 'Google Colab', 'Flask', 'Figma', 'Roboflow'],
    note: 'Research paper achieved perfect originality: 0% plagiarism & 0% AI detection.',
  },
  {
    index: '02',
    title: 'FitBit — Food Ordering & Reservation',
    category: 'AOL Human-Computer Interaction',
    description:
      'UI/UX design for a culinary app: restaurant exploration, menu browsing, table reservations, and convenient food ordering.',
    contribution:
      'Analyzed the user journey and structured an intuitive interaction flow so users can complete the ordering process easily and without friction.',
    tools: ['Figma', 'User-Centered Design (UCD)'],
  },
  {
    index: '03',
    title: 'Donation Management Database',
    category: 'AOL Database Technology',
    description:
      'Built a reliable relational database architecture for managing social donation funds and goods logistics in a transparent and structured way.',
    contribution:
      'Identified data anomalies (insert, update, delete), designed staged normalization up to Third Normal Form (3NF), and produced the Entity Relationship Diagram (ERD) model.',
    tools: ['MySQL / SQL', 'DDL & DML', 'Constraints', 'Google Sheets'],
  },
  {
    index: '04',
    title: 'RLC Rectifier Circuit Numerical Simulation',
    category: 'AOL Computational Physics',
    description:
      'Designed and simulated a rectifier system converting AC to DC to safely supply power to three green LEDs wired in parallel.',
    contribution:
      'Ran time-domain simulations in Python to test voltage stability and ensure the current limiters (resistor, inductor, capacitor) worked optimally without risking hardware damage.',
    tools: ['Python (PPE)', 'Numerical Simulation Libraries'],
  },
  {
    index: '05',
    title: 'Integrated Restaurant Management System',
    category: 'Combined AOL Software Engineering & UX',
    description:
      'A cross-disciplinary collaboration to design a comprehensive end-to-end restaurant management system.',
    contribution:
      'Aligned system requirements analysis from the software engineering side with the visual interface design to create a seamlessly integrated ecosystem between customers and restaurant management.',
    tools: ['System Analysis', 'UI/UX Design', 'Figma'],
  },
]

export type Experience = {
  role: string
  org: string
  period: string
  description: string
}

export const experiences: Experience[] = [
  {
    role: 'Digital Marketing Intern',
    org: 'Tedja Coffee, Bandung',
    period: 'Sep 2025 – Present',
    description:
      'Part of the Digital Marketing team, supporting content planning, social media management, and campaign execution to grow brand awareness and audience engagement.',
  },
  {
    role: 'Host Live Streaming',
    org: 'CHICMORE, Jakarta',
    period: '2025',
    description:
      'Hosted interactive product sales live streams, answered audience questions in real time, and boosted engagement and viewer counts.',
  },
  {
    role: 'Fundraising & Sponsorship Division',
    org: 'Yearbook Committee — SMA Mardi Waluya',
    period: '2024',
    description:
      'Developed fundraising strategies, negotiated with vendors and sponsors, and maintained transparent financial records.',
  },
  {
    role: 'Treasurer & Member',
    org: 'High School Dance Team',
    period: '2021 – 2024',
    description:
      'Managed the organization treasury, prepared activity budgets, and issued periodic financial reports. Contributed actively toward winning 2nd place at Juvenesco 2024.',
  },
]

export type Education = {
  school: string
  detail: string
  period: string
  meta?: string
}

export const education: Education[] = [
  {
    school: 'Bina Nusantara University @Bandung',
    detail: 'Computer Science Major (Active)',
    period: 'August 2024 – Present',
  },
  {
    school: 'SMA Mardi Waluya Cibinong',
    detail: 'Natural Sciences (IPA)',
    period: '2021 – 2024',
  },
]
