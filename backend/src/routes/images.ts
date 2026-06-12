import { Router, Request, Response } from 'express';
import { imagePresets } from '../data/mock-data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  let result = imagePresets;
  if (category && typeof category === 'string') {
    result = imagePresets.filter(i => i.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ data: result, total: result.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const img = imagePresets.find(i => i.id === req.params.id);
  if (!img) return res.status(404).json({ error: 'Image preset not found' });
  res.json({ data: img });
});

export default router;
