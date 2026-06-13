import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import { authMiddleware } from './middleware/auth';
import authRouter from './routes/auth';
import componentsRouter from './routes/components';
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
app.use('/api/payments', authMiddleware, paymentsRouter);

app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
