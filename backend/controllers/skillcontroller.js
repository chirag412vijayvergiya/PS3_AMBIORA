import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String }, // IT, Manufacturing, etc.
});

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
