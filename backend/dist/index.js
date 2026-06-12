"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const auth_1 = require("./middleware/auth");
const auth_2 = __importDefault(require("./routes/auth"));
const components_1 = __importDefault(require("./routes/components"));
const algorithms_1 = __importDefault(require("./routes/algorithms"));
const typography_1 = __importDefault(require("./routes/typography"));
const client_guide_1 = __importDefault(require("./routes/client-guide"));
const ideas_1 = __importDefault(require("./routes/ideas"));
const images_1 = __importDefault(require("./routes/images"));
const payments_1 = __importDefault(require("./routes/payments"));
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Auth Routes (public)
app.use('/api/auth', auth_2.default);
// Protected API Routes (require auth)
app.use('/api/components', auth_1.authMiddleware, components_1.default);
app.use('/api/algorithms', auth_1.authMiddleware, algorithms_1.default);
app.use('/api/typography', auth_1.authMiddleware, typography_1.default);
app.use('/api/client-guide', auth_1.authMiddleware, client_guide_1.default);
app.use('/api/ideas', auth_1.authMiddleware, ideas_1.default);
app.use('/api/images', auth_1.authMiddleware, images_1.default);
app.use('/api/payments', auth_1.authMiddleware, payments_1.default);
app.listen(port, () => {
    console.log(`🚀 Backend running on http://localhost:${port}`);
});
