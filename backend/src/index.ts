import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import { authMiddleware } from './middleware/auth';
import authRouter from './routes/auth';
import componentsRouter from './routes/components';
import algorithmsRouter from './routes/algorithms';
import typographyRouter from './routes/typography';
import clientGuideRouter from './routes/client-guide';
import ideasRouter from './routes/ideas';
import imagesRouter from './routes/images';
import paymentsRouter from './routes/payments';

connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Auth Routes (public)
app.use('/api/auth', authRouter);

// Protected API Routes (require auth)
app.use('/api/components', authMiddleware, componentsRouter);
app.use('/api/algorithms', authMiddleware, algorithmsRouter);
app.use('/api/typography', authMiddleware, typographyRouter);
app.use('/api/client-guide', authMiddleware, clientGuideRouter);
app.use('/api/ideas', authMiddleware, ideasRouter);
app.use('/api/images', authMiddleware, imagesRouter);
app.use('/api/payments', authMiddleware, paymentsRouter);

app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
