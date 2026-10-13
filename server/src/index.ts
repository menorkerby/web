import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { contactRouter } from './routes/contact';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Security
app.use(helmet());

// CORS — allowlist only expected frontend origin
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Body parsing
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: false, limit: '16kb' }));

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'codemerge-api' });
});

// Routes
app.use('/api', contactRouter);

// 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Not found.' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[codemerge-api] Listening on http://localhost:${PORT}`);
  if (!process.env.SMTP_HOST || !process.env.CONTACT_RECIPIENT_EMAIL) {
    console.warn(
      '[codemerge-api] WARNING: SMTP is not configured. Contact form submissions will not be delivered.'
    );
  }
});
