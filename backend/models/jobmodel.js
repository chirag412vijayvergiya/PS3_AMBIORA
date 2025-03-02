const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number },
  location: { type: String, required: true }, // District, Taluka, Village
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: { type: String, required: true }, // IT, Manufacturing, etc.
  requiredSkills: [String], // Matching skills for recommendations
  lastDateToApply: { type: Date, required: true },
  postedAt: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
