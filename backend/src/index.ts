import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Mock Auth Routes
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

app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
