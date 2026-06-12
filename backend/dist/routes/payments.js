"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const razorpay_1 = __importDefault(require("razorpay"));
const crypto_1 = __importDefault(require("crypto"));
const mock_data_1 = require("../data/mock-data");
const Purchase_1 = __importDefault(require("../models/Purchase"));
const router = (0, express_1.Router)();
// Initialize Razorpay instance
const getRazorpayInstance = () => {
    return new razorpay_1.default({
        key_id: process.env.RAZORPAY_KEY_ID || '',
        key_secret: process.env.RAZORPAY_KEY_SECRET || '',
    });
};
// POST /api/payments/create-order
router.post('/create-order', async (req, res) => {
    try {
        const { componentId } = req.body;
        // Validate component and get price
        const comp = mock_data_1.components.find(c => c.id === componentId);
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
                componentId,
                componentName: comp.name
            }
        };
        const order = await instance.orders.create(options);
        // Save purchase in DB as PENDING
        const user = req.user;
        await Purchase_1.default.create({
            userId: user._id,
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
    }
    catch (error) {
        console.error('Razorpay Error:', error);
        res.status(500).json({ success: false, error: 'Failed to create order', details: error?.message });
    }
});
// POST /api/payments/verify
router.post('/verify', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, componentId } = req.body;
        const secret = process.env.RAZORPAY_KEY_SECRET || '';
        // Create signature to verify
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto_1.default
            .createHmac("sha256", secret)
            .update(body.toString())
            .digest("hex");
        const isAuthentic = expectedSignature === razorpay_signature;
        if (isAuthentic) {
            // Find the purchase and mark it as COMPLETED
            const purchase = await Purchase_1.default.findOne({ razorpayOrderId: razorpay_order_id });
            if (purchase) {
                purchase.status = 'COMPLETED';
                purchase.razorpayPaymentId = razorpay_payment_id;
                await purchase.save();
            }
            res.json({ success: true, message: "Payment verified successfully" });
        }
        else {
            res.status(400).json({ success: false, error: 'Invalid signature' });
        }
    }
    catch (error) {
        console.error('Verification Error:', error);
        res.status(500).json({ success: false, error: 'Payment verification failed' });
    }
});
exports.default = router;
