export interface Concept {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
  bgColor: string;
}

export const concepts: Concept[] = [
  {
    id: 'local-business',
    title: 'Local Business Landing Page',
    description:
      'A clean, service-focused landing page concept for a small local business — built for first impressions.',
    tags: ['Web Design', 'Responsive'],
    accentColor: '#5475FF',
    bgColor: '#0E1729',
  },
  {
    id: 'student-portfolio',
    title: 'Student Portfolio Experience',
    description:
      'A personal portfolio layout concept designed to help students and graduates stand out online.',
    tags: ['Frontend', 'Personal Branding'],
    accentColor: '#36D6DF',
    bgColor: '#0A1920',
  },
  {
    id: 'workflow-dashboard',
    title: 'Simple Workflow Dashboard',
    description:
      'A practical business tool concept — task management and progress tracking in a clean interface.',
    tags: ['Web App', 'UI Design'],
    accentColor: '#8D9DFF',
    bgColor: '#0D1628',
  },
];
