import { Router, Request, Response } from 'express';
import { components } from '../data/mock-data';
import Purchase from '../models/Purchase';

const router = Router();


router.get('/', async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    let result = components;
    if (category && typeof category === 'string') {
      result = components.filter(c => c.category.toLowerCase() === category.toLowerCase());
    }

    const user = (req as any).user;
    let purchasedComponentIds: string[] = [];
    let hasFullAccess = false;
    if (user) {
      const purchases = await Purchase.find({ userId: user._id, status: 'COMPLETED' });
      purchasedComponentIds = purchases.filter(p => p.type === 'component' && p.componentId).map(p => p.componentId as string);
      hasFullAccess = purchases.some(p => p.type === 'bundle' || p.type === 'lifetime');
    }

    const modifiedResult = result.map(c => ({
      ...c,
      unlocked: hasFullAccess || !c.isPremium || purchasedComponentIds.includes(c.id),
    }));

    res.json({ data: modifiedResult, total: modifiedResult.length });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/:id', (req: Request, res: Response) => {
  const comp = components.find(c => c.id === req.params.id);
  if (!comp) return res.status(404).json({ error: 'Component not found' });
  res.json({ data: comp });
});


router.post('/:id/unlock', (req: Request, res: Response) => {
  const comp = components.find(c => c.id === req.params.id);
  if (!comp) return res.status(404).json({ error: 'Component not found' });
  res.json({ data: { ...comp, unlocked: true }, message: 'Component unlocked successfully' });
});

export default router;
