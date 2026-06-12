"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const router = (0, express_1.Router)();
// @route   POST /api/auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User_1.default.findOne({ email });
        if (userExists) {
            res.status(400).json({ success: false, error: 'User already exists' });
            return;
        }
        const user = await User_1.default.create({
            name,
            email,
            password,
        });
        if (user) {
            res.status(201).json({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: (0, generateToken_1.default)(user._id.toString()),
            });
        }
        else {
            res.status(400).json({ success: false, error: 'Invalid user data' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: (0, generateToken_1.default)(user._id.toString()),
            });
        }
        else {
            res.status(401).json({ success: false, error: 'Invalid email or password' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// @route   GET /api/auth/profile
// @desc    Get user profile
const auth_1 = require("../middleware/auth");
router.get('/profile', auth_1.authMiddleware, async (req, res) => {
    try {
        const user = await User_1.default.findById(req.user._id);
        if (user) {
            res.json({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        }
        else {
            res.status(404).json({ success: false, error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
exports.default = router;
