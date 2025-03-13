const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema({
  github: { type: String, required: true },
  linkedin: { type: String, required: true },
  twitter: { type: String, required: true }
});

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  about: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  skills: [{ type: String, required: true }],
  socialLinks: { type: socialLinksSchema, required: true },
  researchStatement: { type: String }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;