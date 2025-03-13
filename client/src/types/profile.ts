export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  avatar: string;
  email: string;
  location: string;
  skills: string[];
  socialLinks: SocialLinks;
  researchStatement?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  description: string;
  link: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  points: string[];
  certification?: string;
  learning?: string;
}