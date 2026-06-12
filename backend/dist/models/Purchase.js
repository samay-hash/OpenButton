"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const purchaseSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    componentId: {
        type: String,
        required: true,
    },
    razorpayOrderId: {
        type: String,
        required: true,
    },
    razorpayPaymentId: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        enum: ['PENDING', 'COMPLETED'],
        default: 'PENDING',
    },
}, {
    timestamps: true,
});
const Purchase = mongoose_1.default.model('Purchase', purchaseSchema);
exports.default = Purchase;
