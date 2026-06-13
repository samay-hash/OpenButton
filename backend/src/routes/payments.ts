import { Router, Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { components } from '../data/mock-data';
import Purchase from '../models/Purchase';

const router = Router();

 
const getRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || '',
    key_secret: process.env.RAZORPAY_KEY_SECRET || '',
  });
};

// POST /api/payments/component
router.post('/component', async (req: Request, res: Response) => {
  try {
    const { componentId } = req.body;
    
    const comp = components.find(c => c.id === componentId);
    if (!comp) {
      return res.status(404).json({ error: 'Component not found' });
    }

    const amountInPaise = comp.price * 100;

    const instance = getRazorpayInstance();
    
    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}_${componentId}`,
      notes: {
        type: 'component',
        componentId,
        componentName: comp.name
      }
    };

    const order = await instance.orders.create(options);
    
    // Save purchase in DB as PENDING
    const user = (req as any).user;
    await Purchase.create({
      userId: user._id,
      type: 'component',
      componentId,
      razorpayOrderId: order.id,
      status: 'PENDING',
    });
    
    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      component: {
        id: comp.id,
        name: comp.name,
        price: comp.price
      }
    });

  } catch (error: any) {
    console.error('Razorpay Error:', error);
    res.status(500).json({ success: false, error: 'Failed to create order', details: error?.message });
  }
});

// POST /api/payments/bundle
router.post('/bundle', async (req: Request, res: Response) => {
  try {
    const amountInPaise = 299 * 100; // ₹299
    const instance = getRazorpayInstance();
    
    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}_bundle`,
      notes: {
        type: 'bundle',
        description: 'OpenButton V1 Bundle (30 Components)'
      }
    };

    const order = await instance.orders.create(options);
    
    const user = (req as any).user;
    await Purchase.create({
      userId: user._id,
      type: 'bundle',
      razorpayOrderId: order.id,
      status: 'PENDING',
    });
    
    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });

  } catch (error: any) {
    console.error('Razorpay Error:', error);
    res.status(500).json({ success: false, error: 'Failed to create bundle order', details: error?.message });
  }
});

// POST /api/payments/lifetime
router.post('/lifetime', async (req: Request, res: Response) => {
  try {
    const amountInPaise = 799 * 100; // ₹799
    const instance = getRazorpayInstance();
    
    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}_lifetime`,
      notes: {
        type: 'lifetime',
        description: 'OpenButton Lifetime Access'
      }
    };

    const order = await instance.orders.create(options);
    
    const user = (req as any).user;
    await Purchase.create({
      userId: user._id,
      type: 'lifetime',
      razorpayOrderId: order.id,
      status: 'PENDING',
    });
    
    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });

  } catch (error: any) {
    console.error('Razorpay Error:', error);
    res.status(500).json({ success: false, error: 'Failed to create lifetime order', details: error?.message });
  }
});

// POST /api/payments/verify
router.post('/verify', async (req: Request, res: Response) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      componentId
    } = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET || '';

    // Create signature to verify
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Find the purchase and mark it as COMPLETED
      const purchase = await Purchase.findOne({ razorpayOrderId: razorpay_order_id });
      if (purchase) {
        purchase.status = 'COMPLETED';
        purchase.razorpayPaymentId = razorpay_payment_id;
        await purchase.save();
      }

      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, error: 'Invalid signature' });
    }

  } catch (error) {
    console.error('Verification Error:', error);
    res.status(500).json({ success: false, error: 'Payment verification failed' });
  }
});

export default router;
