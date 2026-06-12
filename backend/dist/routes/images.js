"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mock_data_1 = require("../data/mock-data");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const { category } = req.query;
    let result = mock_data_1.imagePresets;
    if (category && typeof category === 'string') {
        result = mock_data_1.imagePresets.filter(i => i.category.toLowerCase() === category.toLowerCase());
    }
    res.json({ data: result, total: result.length });
});
router.get('/:id', (req, res) => {
    const img = mock_data_1.imagePresets.find(i => i.id === req.params.id);
    if (!img)
        return res.status(404).json({ error: 'Image preset not found' });
    res.json({ data: img });
});
exports.default = router;
