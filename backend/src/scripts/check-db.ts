import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const checkDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');
    const users = await mongoose.connection.collection('users').countDocuments();
    const purchases = await mongoose.connection.collection('purchases').countDocuments();
    console.log(`Users count: ${users}`);
    console.log(`Purchases count: ${purchases}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

checkDb();
