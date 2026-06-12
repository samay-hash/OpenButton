import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/auth';
import componentsRouter from './routes/components';
import algorithmsRouter from './routes/algorithms';
import typographyRouter from './routes/typography';
import clientGuideRouter from './routes/client-guide';
import ideasRouter from './routes/ideas';
import imagesRouter from './routes/images';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Auth Routes (public)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email && password) {
    return res.json({ 
      token: 'mock-jwt-token-123', 
      user: { email, name: 'Premium User' } 
    });
  }
  
  return res.status(400).json({ error: 'Invalid credentials' });
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  if (name && email && password) {
    return res.json({ 
      token: 'mock-jwt-token-456', 
      user: { email, name } 
    });
  }
  
  return res.status(400).json({ error: 'Missing required fields' });
});

// Protected API Routes (require auth)
app.use('/api/components', authMiddleware, componentsRouter);
app.use('/api/algorithms', authMiddleware, algorithmsRouter);
app.use('/api/typography', authMiddleware, typographyRouter);
app.use('/api/client-guide', authMiddleware, clientGuideRouter);
app.use('/api/ideas', authMiddleware, ideasRouter);
app.use('/api/images', authMiddleware, imagesRouter);

app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
