import { Router, Request, Response } from 'express';

interface Idea {
  id: string;
  userId: string;
  idea: string;
  language: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
}

// In-memory store (replace with DB later)
const ideas: Idea[] = [
  {
    id: '1',
    userId: 'user_001',
    idea: 'Mujhe ek glassmorphism wala login page chahiye jisme floating particles ho background me',
    language: 'Hinglish',
    status: 'completed',
    date: '2026-06-10',
  },
  {
    id: '2',
    userId: 'user_001',
    idea: 'A dark mode pricing table with neon glow borders that animate on hover',
    language: 'English',
    status: 'in-progress',
    date: '2026-06-11',
  },
];

let nextId = 3;

const router = Router();

// GET /api/ideas — list user's ideas
router.get('/', (req: Request, res: Response) => {
  const userId = (req as any).user?.id || 'user_001';
  const userIdeas = ideas.filter(i => i.userId === userId);
  res.json({ data: userIdeas, total: userIdeas.length });
});

// POST /api/ideas — submit new idea
router.post('/', (req: Request, res: Response) => {
  const { idea, language } = req.body;
  if (!idea) return res.status(400).json({ error: 'Idea text is required' });

  const newIdea: Idea = {
    id: String(nextId++),
    userId: (req as any).user?.id || 'user_001',
    idea,
    language: language || 'Auto-detected',
    status: 'pending',
    date: new Date().toISOString().split('T')[0],
  };

  ideas.push(newIdea);
  res.status(201).json({ data: newIdea, message: 'Idea submitted successfully' });
});

// GET /api/ideas/:id — single idea
router.get('/:id', (req: Request, res: Response) => {
  const found = ideas.find(i => i.id === req.params.id);
  if (!found) return res.status(404).json({ error: 'Idea not found' });
  res.json({ data: found });
});

export default router;
