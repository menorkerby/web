export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Website Development',
    description:
      'Modern, responsive websites and landing pages built to present your brand beautifully on any screen.',
    tags: ['Responsive websites', 'Landing pages', 'Frontend development'],
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Solutions',
    description:
      'Practical web-based tools and straightforward software solutions shaped around a specific need or workflow.',
    tags: ['Web apps', 'Custom tools', 'Workflow support'],
  },
  {
    id: 'design',
    number: '03',
    title: 'Digital Design',
    description:
      'Clear, cohesive visuals and friendly interfaces that make digital experiences easier to use.',
    tags: ['UI design', 'Layouts', 'Digital assets'],
  },
  {
    id: 'support',
    number: '04',
    title: 'Technical Support',
    description:
      'Helpful assistance for everyday computer, website, and technology-related concerns.',
    tags: ['Troubleshooting', 'Setup help', 'Maintenance guidance'],
  },
];
