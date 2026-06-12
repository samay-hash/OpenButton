import { Router, Request, Response } from 'express';
import { algorithms } from '../data/mock-data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  let result = algorithms;
  if (category && typeof category === 'string') {
    result = algorithms.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ data: result, total: result.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const algo = algorithms.find(a => a.id === req.params.id);
  if (!algo) return res.status(404).json({ error: 'Algorithm not found' });
  res.json({ data: algo });
});

export default router;
