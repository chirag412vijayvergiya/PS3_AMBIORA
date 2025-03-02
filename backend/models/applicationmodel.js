import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  jobSeeker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'shortlisted', 'rejected', 'hired'],
    default: 'pending',
  },
  appliedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
