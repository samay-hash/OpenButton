"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mock_data_1 = require("../data/mock-data");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const { category } = req.query;
    let result = mock_data_1.typographyGuides;
    if (category && typeof category === 'string') {
        result = mock_data_1.typographyGuides.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }
    res.json({ data: result, total: result.length });
});
router.get('/:id', (req, res) => {
    const guide = mock_data_1.typographyGuides.find(t => t.id === req.params.id);
    if (!guide)
        return res.status(404).json({ error: 'Guide not found' });
    res.json({ data: guide });
});
exports.default = router;
