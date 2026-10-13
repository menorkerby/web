import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { contactSchema } from '../validators/contact';
import { deliverInquiry } from '../services/inquiryService';

export const contactRouter = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many inquiries submitted. Please wait a few minutes before trying again.',
  },
});

contactRouter.post('/contact', contactLimiter, async (req, res) => {
  // Honeypot check
  if (req.body?.website && req.body.website.trim() !== '') {
    // Silently accept to avoid leaking honeypot logic to bots
    res.status(200).json({ success: true, message: 'Your inquiry has been received.' });
    return;
  }

  const parseResult = contactSchema.safeParse(req.body);

  if (!parseResult.success) {
    const firstError = parseResult.error.errors[0]?.message || 'Please check the form fields.';
    res.status(400).json({ success: false, message: firstError });
    return;
  }

  try {
    await deliverInquiry(parseResult.data);
    res.status(201).json({ success: true, message: 'Your inquiry has been received.' });
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'SMTP_NOT_CONFIGURED') {
      console.error('[contact] SMTP not configured — inquiry not delivered.');
      res.status(503).json({
        success: false,
        message: 'Contact service is temporarily unavailable. Please try again later.',
      });
      return;
    }
    console.error('[contact] Delivery error:', (err as Error).message);
    res.status(503).json({
      success: false,
      message: 'Contact service is temporarily unavailable. Please try again later.',
    });
  }
});
