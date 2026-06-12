"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// In-memory store (replace with DB later)
const ideas = [
    {
        id: '1',
        userId: 'user_001',
        idea: 'Mujhe ek glassmorphism wala login page chahiye jisme floating particles ho background me',
        language: 'Hinglish',
        status: 'completed',
        date: '2026-06-10',
    },
    {
        id: '2',
        userId: 'user_001',
        idea: 'A dark mode pricing table with neon glow borders that animate on hover',
        language: 'English',
        status: 'in-progress',
        date: '2026-06-11',
    },
];
let nextId = 3;
const router = (0, express_1.Router)();
// GET /api/ideas — list user's ideas
router.get('/', (req, res) => {
    const userId = req.user?.id || 'user_001';
    const userIdeas = ideas.filter(i => i.userId === userId);
    res.json({ data: userIdeas, total: userIdeas.length });
});
// POST /api/ideas — submit new idea
router.post('/', (req, res) => {
    const { idea, language } = req.body;
    if (!idea)
        return res.status(400).json({ error: 'Idea text is required' });
    const newIdea = {
        id: String(nextId++),
        userId: req.user?.id || 'user_001',
        idea,
        language: language || 'Auto-detected',
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
    };
    ideas.push(newIdea);
    res.status(201).json({ data: newIdea, message: 'Idea submitted successfully' });
});
// GET /api/ideas/:id — single idea
router.get('/:id', (req, res) => {
    const found = ideas.find(i => i.id === req.params.id);
    if (!found)
        return res.status(404).json({ error: 'Idea not found' });
    res.json({ data: found });
});
exports.default = router;
