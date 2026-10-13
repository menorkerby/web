import nodemailer from 'nodemailer';
import type { ContactPayload } from '../validators/contact';

function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD &&
      process.env.CONTACT_RECIPIENT_EMAIL &&
      process.env.CONTACT_SENDER_EMAIL
  );
}

function buildEmailHtml(data: ContactPayload): string {
  return `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px; border-radius: 12px;">
      <h2 style="color: #111827; margin-bottom: 4px;">New Project Inquiry</h2>
      <p style="color: #6b7280; margin-top: 0; margin-bottom: 24px;">Received via CodeMerge contact form</p>

      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${escapeHtml(data.service)}</td></tr>
        ${data.budget ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${escapeHtml(data.budget)}</td></tr>` : ''}
        <tr><td style="padding: 10px 0; color: #374151; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${escapeHtml(data.message)}</td></tr>
      </table>

      <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">Reply directly to this email to respond to the inquiry.</p>
    </div>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function deliverInquiry(data: ContactPayload): Promise<void> {
  if (!isSmtpConfigured()) {
    throw new Error('SMTP_NOT_CONFIGURED');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: parseInt(process.env.SMTP_PORT || '587', 10) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"CodeMerge Inquiries" <${process.env.CONTACT_SENDER_EMAIL}>`,
    to: process.env.CONTACT_RECIPIENT_EMAIL,
    replyTo: `"${data.name}" <${data.email}>`,
    subject: `New Inquiry: ${data.service} — ${data.name}`,
    html: buildEmailHtml(data),
    text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nBudget: ${data.budget || 'Not specified'}\n\nMessage:\n${data.message}`,
  });
}
