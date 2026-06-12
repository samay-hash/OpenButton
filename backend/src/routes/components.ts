import { Router, Request, Response } from 'express';
import { components } from '../data/mock-data';

const router = Router();

// GET /api/components — list all components
router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  let result = components;
  if (category && typeof category === 'string') {
    result = components.filter(c => c.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ data: result, total: result.length });
});

// GET /api/components/:id — single component
router.get('/:id', (req: Request, res: Response) => {
  const comp = components.find(c => c.id === req.params.id);
  if (!comp) return res.status(404).json({ error: 'Component not found' });
  res.json({ data: comp });
});

// POST /api/components/:id/unlock — unlock a component
router.post('/:id/unlock', (req: Request, res: Response) => {
  const comp = components.find(c => c.id === req.params.id);
  if (!comp) return res.status(404).json({ error: 'Component not found' });
  res.json({ data: { ...comp, unlocked: true }, message: 'Component unlocked successfully' });
});

export default router;
