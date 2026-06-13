import { Router, Request, Response } from 'express';
import Purchase from '../models/Purchase';
import User from '../models/User';

const router = Router();

// Simple admin secret check
const adminAuth = (req: Request, res: Response, next: any) => {
  const secret = req.headers['x-admin-secret'];
  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// GET /api/admin/users - list all users
router.get('/users', adminAuth, async (req: Request, res: Response) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, count: users.length, data: users });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/admin/purchases - list all completed purchases
router.get('/purchases', adminAuth, async (req: Request, res: Response) => {
  try {
    const purchases = await Purchase.find({ status: 'COMPLETED' })
      .populate('userId', 'name email')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: purchases.length, data: purchases });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/admin/all-purchases - list ALL purchases including pending
router.get('/all-purchases', adminAuth, async (req: Request, res: Response) => {
  try {
    const purchases = await Purchase.find()
      .populate('userId', 'name email')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: purchases.length, data: purchases });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/admin/fix-purchase - manually assign a purchase to a user by email
// Body: { email: "user@example.com", componentId: "btn-1", razorpayOrderId: "order_xxx" }
router.post('/fix-purchase', adminAuth, async (req: Request, res: Response) => {
  try {
    const { email, componentId, razorpayOrderId, razorpayPaymentId } = req.body;

    if (!email || !componentId) {
      return res.status(400).json({ error: 'email and componentId are required' });
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ error: `User not found with email: ${email}` });
    }

    // Check if purchase already exists for this user + component
    const existing = await Purchase.findOne({
      userId: user._id,
      componentId,
      status: 'COMPLETED',
    });

    if (existing) {
      return res.json({ success: true, message: 'Purchase already exists for this user', data: existing });
    }

    // Create or update the purchase record
    let purchase;
    if (razorpayOrderId) {
      purchase = await Purchase.findOneAndUpdate(
        { razorpayOrderId },
        {
          userId: user._id,
          status: 'COMPLETED',
          componentId,
          razorpayPaymentId: razorpayPaymentId || '',
        },
        { new: true, upsert: true }
      );
    } else {
      purchase = await Purchase.create({
        userId: user._id,
        type: 'component',
        componentId,
        razorpayOrderId: `manual_fix_${Date.now()}`,
        razorpayPaymentId: razorpayPaymentId || 'manual',
        status: 'COMPLETED',
      });
    }

    res.json({
      success: true,
      message: `✅ Purchase fixed! User ${email} now has access to component ${componentId}`,
      data: purchase,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/admin/user-purchases?email=xxx - check what a user has purchased
router.get('/user-purchases', adminAuth, async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'email query param required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ error: `User not found: ${email}` });
    }

    const purchases = await Purchase.find({ userId: user._id }).sort({ createdAt: -1 });
    res.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
      purchases,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
