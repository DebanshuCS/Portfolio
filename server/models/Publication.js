const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  conference: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
}, { timestamps: true });

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;