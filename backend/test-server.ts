import express from 'express';
import adminRouter from './src/routes/admin';
const app = express();
app.use('/api/admin', adminRouter);
app.listen(4001, () => console.log('Test server on 4001'));
