import { Router, Request, Response } from 'express';
import { typographyGuides } from '../data/mock-data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  let result = typographyGuides;
  if (category && typeof category === 'string') {
    result = typographyGuides.filter(t => t.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ data: result, total: result.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const guide = typographyGuides.find(t => t.id === req.params.id);
  if (!guide) return res.status(404).json({ error: 'Guide not found' });
  res.json({ data: guide });
});

export default router;
