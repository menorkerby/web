export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What kind of websites can CodeMerge create?',
    answer:
      'We focus on responsive business websites, landing pages, portfolios, and other straightforward web experiences. Tell us what you have in mind so we can discuss the right approach.',
  },
  {
    id: 'faq-2',
    question: 'Can you help with design as well as development?',
    answer:
      'Yes. Our services cover both digital design and the development work needed to bring a concept to life.',
  },
  {
    id: 'faq-3',
    question: 'Do you work with students and small businesses?',
    answer:
      'Those are among the audiences CodeMerge aims to serve. We can discuss the scope and requirements of a project through an inquiry.',
  },
  {
    id: 'faq-4',
    question: 'How much does a project cost?',
    answer:
      'Project requirements vary. Share the goals and features you need so the scope and an appropriate quote can be discussed.',
  },
  {
    id: 'faq-5',
    question: 'How do I get started?',
    answer:
      'Use the contact form below to tell us about your idea, the service you\'re looking for, and how we can reach you.',
  },
];
