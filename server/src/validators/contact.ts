import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(254, 'Email is too long.'),
  service: z.enum(
    [
      'Website Development',
      'Software Solutions',
      'Digital Design',
      'Technical Support',
      'Other',
    ],
    { errorMap: () => ({ message: 'Please select a valid service.' }) }
  ),
  message: z
    .string()
    .trim()
    .min(10, 'Please share a bit more about your project (at least 10 characters).')
    .max(3000, 'Message is too long (maximum 3000 characters).'),
  budget: z
    .enum(['Not sure yet', 'Below ₱10,000', '₱10,000–₱25,000', '₱25,000+'])
    .optional(),
  website: z.string().max(0, 'Honeypot triggered.').optional(), // honeypot
});

export type ContactPayload = z.infer<typeof contactSchema>;
