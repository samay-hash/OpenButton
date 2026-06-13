import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      enum: ['component', 'bundle', 'lifetime'],
      default: 'component',
      required: true,
    },
    componentId: {
      type: String,
      // Only required for component purchases
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
  },
  {
    timestamps: true,
  }
);

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
