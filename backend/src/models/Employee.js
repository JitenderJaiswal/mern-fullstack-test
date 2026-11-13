import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  joiningDate: { type: Date, required: true },
  salary: { type: Number, required: true, min: 0 },
}, { timestamps: true });

export default mongoose.model('Employee', employeeSchema);
