const express = require('express');
const router = express.Router();
const profileService = require('../services/profileService');

// Get profile information
router.get('/profile', async (req, res) => {
  try {
    console.log('GET /api/profile: Fetching profile information');
    const profile = await profileService.getProfile();
    console.log('GET /api/profile: Successfully retrieved profile information');
    res.status(200).json(profile);
  } catch (error) {
    console.error('Error in GET /api/profile:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get projects
router.get('/projects', async (req, res) => {
  try {
    console.log('GET /api/projects: Fetching projects');
    const projects = await profileService.getProjects();
    console.log(`GET /api/projects: Successfully retrieved ${projects.projects ? projects.projects.length : 0} projects`);
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error in GET /api/projects:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get publications
router.get('/publications', async (req, res) => {
  try {
    console.log('GET /api/publications: Fetching publications');
    const publications = await profileService.getPublications();
    console.log(`GET /api/publications: Successfully retrieved ${publications.publications ? publications.publications.length : 0} publications`);
    res.status(200).json(publications);
  } catch (error) {
    console.error('Error in GET /api/publications:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get experience
router.get('/experience', async (req, res) => {
  try {
    console.log('GET /api/experience: Fetching experience');
    const experience = await profileService.getExperience();
    console.log(`GET /api/experience: Successfully retrieved ${experience.experiences ? experience.experiences.length : 0} experiences`);
    res.status(200).json(experience);
  } catch (error) {
    console.error('Error in GET /api/experience:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;