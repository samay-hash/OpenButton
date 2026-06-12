import { Router, Request, Response } from 'express';
import { clientGuides } from '../data/mock-data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ data: clientGuides, total: clientGuides.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const guide = clientGuides.find(g => g.id === req.params.id);
  if (!guide) return res.status(404).json({ error: 'Guide not found' });
  res.json({ data: guide });
});

export default router;
