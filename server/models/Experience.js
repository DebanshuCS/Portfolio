const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  points: [{ type: String, required: true }],
  certification: { type: String },
  learning: { type: String }
}, { timestamps: true });

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;