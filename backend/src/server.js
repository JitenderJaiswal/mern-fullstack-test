import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/employees', employeeRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});
const port = Number(process.env.PORT || 5000);
try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => console.log(`API running at http://localhost:${port}`));
} catch (error) {
  console.error('Database connection failed:', error.message);
  process.exit(1);
}
