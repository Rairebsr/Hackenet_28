// models/StudentResult.js

import mongoose from 'mongoose';

const studentResultSchema = new mongoose.Schema({
  student: {
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
  },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  division: { type: String, required: true },
  examType: { type: String, required: true }, // e.g., 'Series 1', 'Series 2', 'Semester'
  examDate: { type: Date, default: Date.now },

  marks: [
    {
      subject: { type: String, required: true },
      score: { type: Number, required: true },
    }
  ],

}, { timestamps: true });

export default mongoose.model('StudentResult', studentResultSchema);
