import api from './api';
import { Profile, Project, Publication, Experience } from '@/types/profile';

// Description: Get profile information
// Endpoint: GET /api/profile
// Request: {}
// Response: { user: Profile }
export const getProfile = async () => {
  try {
    const response = await api.get('/api/profile');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get projects
// Endpoint: GET /api/projects
// Request: {}
// Response: { projects: Project[] }
export const getProjects = async () => {
  try {
    const response = await api.get('/api/projects');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get research publications
// Endpoint: GET /api/publications
// Request: {}
// Response: { publications: Publication[] }
export const getPublications = async () => {
  try {
    const response = await api.get('/api/publications');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};

// Description: Get experience information
// Endpoint: GET /api/experience
// Request: {}
// Response: { experiences: Experience[] }
export const getExperience = async () => {
  try {
    const response = await api.get('/api/experience');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};