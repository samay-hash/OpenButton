"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mock_data_1 = require("../data/mock-data");
const Purchase_1 = __importDefault(require("../models/Purchase"));
const router = (0, express_1.Router)();
// GET /api/components — list all components
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        let result = mock_data_1.components;
        if (category && typeof category === 'string') {
            result = mock_data_1.components.filter(c => c.category.toLowerCase() === category.toLowerCase());
        }
        // Check user purchases
        const user = req.user;
        let purchasedComponentIds = [];
        if (user) {
            const purchases = await Purchase_1.default.find({ userId: user._id, status: 'COMPLETED' });
            purchasedComponentIds = purchases.map(p => p.componentId);
        }
        const modifiedResult = result.map(c => ({
            ...c,
            unlocked: purchasedComponentIds.includes(c.id),
        }));
        res.json({ data: modifiedResult, total: modifiedResult.length });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// GET /api/components/:id — single component
router.get('/:id', (req, res) => {
    const comp = mock_data_1.components.find(c => c.id === req.params.id);
    if (!comp)
        return res.status(404).json({ error: 'Component not found' });
    res.json({ data: comp });
});
// POST /api/components/:id/unlock — unlock a component
router.post('/:id/unlock', (req, res) => {
    const comp = mock_data_1.components.find(c => c.id === req.params.id);
    if (!comp)
        return res.status(404).json({ error: 'Component not found' });
    res.json({ data: { ...comp, unlocked: true }, message: 'Component unlocked successfully' });
});
exports.default = router;
