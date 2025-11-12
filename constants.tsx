
import React from 'react';
import type { Course, Job, Project, CommunityPost, MediaItem } from './types';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="40" fontFamily="Poppins, sans-serif" fontSize="40" fontWeight="bold" fill="currentColor">
            Kohaq
        </text>
    </svg>
);

export const MOCK_COURSES: Course[] = [
  { id: 'c1', title: 'React for Beginners', instructor: 'Jane Doe', category: 'Web Development', level: 'Beginner', rating: 4.8, enrolled: 12500, price: 49.99, imageUrl: 'https://picsum.photos/seed/react/600/400', duration: '8h 15m' },
  { id: 'c2', title: 'Advanced Node.js', instructor: 'John Smith', category: 'Backend', level: 'Advanced', rating: 4.9, enrolled: 8200, price: 99.99, imageUrl: 'https://picsum.photos/seed/nodejs/600/400', duration: '12h 30m' },
  { id: 'c3', title: 'UI/UX Design Fundamentals', instructor: 'Alice Johnson', category: 'Design', level: 'Beginner', rating: 4.7, enrolled: 25000, price: 'Free', imageUrl: 'https://picsum.photos/seed/uiux/600/400', duration: '6h' },
  { id: 'c4', title: 'Data Science with Python', instructor: 'Robert Brown', category: 'Data Science', level: 'Intermediate', rating: 4.8, enrolled: 15000, price: 79.99, imageUrl: 'https://picsum.photos/seed/python/600/400', duration: '20h' },
  { id: 'c5', title: 'DevOps & CI/CD Pipelines', instructor: 'Chris Green', category: 'DevOps', level: 'Advanced', rating: 4.9, enrolled: 6500, price: 129.99, imageUrl: 'https://picsum.photos/seed/devops/600/400', duration: '15h 45m' },
  { id: 'c6', title: 'Introduction to Digital Marketing', instructor: 'Emily White', category: 'Marketing', level: 'Beginner', rating: 4.6, enrolled: 32000, price: 'Free', imageUrl: 'https://picsum.photos/seed/marketing/600/400', duration: '4h 30m' },
];

export const MOCK_JOBS: Job[] = [
  { id: 'j1', title: 'Frontend Developer', company: 'Tech Solutions Inc.', location: 'Remote', type: 'Full-time', postedDate: '2 days ago', companyLogoUrl: 'https://picsum.photos/seed/logo1/100/100' },
  { id: 'j2', title: 'Product Design Intern', company: 'Creative Minds LLC', location: 'New York, NY', type: 'Internship', postedDate: '5 days ago', companyLogoUrl: 'https://picsum.photos/seed/logo2/100/100' },
  { id: 'j3', title: 'Backend Engineer (Go)', company: 'DataFlow', location: 'San Francisco, CA', type: 'Full-time', postedDate: '1 week ago', companyLogoUrl: 'https://picsum.photos/seed/logo3/100/100' },
  { id: 'j4', title: 'Cloud Engineer (AWS)', company: 'Innovate Cloud', location: 'Remote', type: 'Contract', postedDate: '3 days ago', companyLogoUrl: 'https://picsum.photos/seed/logo4/100/100' },
  { id: 'j5', title: 'Data Analyst', company: 'Analytics Corp', location: 'Chicago, IL', type: 'Full-time', postedDate: '10 days ago', companyLogoUrl: 'https://picsum.photos/seed/logo5/100/100' },
];

export const MOCK_PROJECTS: Project[] = [
  { id: 'p1', title: 'AI-Powered Resume Builder', interns: ['Alex Ray', 'Mia Wong'], description: 'A web app that uses NLP to give real-time feedback on resumes.', techStack: ['React', 'Node.js', 'Python'], imageUrl: 'https://picsum.photos/seed/project1/600/400', githubUrl: '#' },
  { id: 'p2', title: 'E-commerce Analytics Dashboard', interns: ['Ben Carter'], description: 'A real-time dashboard visualizing sales data for an e-commerce platform.', techStack: ['Vue.js', 'Firebase', 'D3.js'], imageUrl: 'https://picsum.photos/seed/project2/600/400', projectUrl: '#' },
  { id: 'p3', title: 'Mobile Fitness Tracker', interns: ['Chloe Davis', 'Evan Garcia'], description: 'A cross-platform mobile app to track workouts and nutrition.', techStack: ['Flutter', 'Google Fit API'], imageUrl: 'https://picsum.photos/seed/project3/600/400', githubUrl: '#' },
  { id: 'p4', title: 'Community Garden Planner', interns: ['Fiona Hall'], description: 'An app to help communities plan and manage shared garden spaces.', techStack: ['Svelte', 'Leaflet.js', 'Supabase'], imageUrl: 'https://picsum.photos/seed/project4/600/400', projectUrl: '#' },
];

export const MOCK_POSTS: CommunityPost[] = [
  { id: 'cp1', author: 'DevDude', authorAvatarUrl: 'https://picsum.photos/seed/avatar1/100/100', title: 'Struggling with React Hooks state management. Any tips?', contentSnippet: 'I have a complex component with multiple useState hooks and it\'s getting hard to manage. Should I switch to useReducer or a state management library like Zustand?', timestamp: '3 hours ago', replies: 12, views: 156, tags: ['react', 'hooks', 'state-management'] },
  { id: 'cp2', author: 'UXQueen', authorAvatarUrl: 'https://picsum.photos/seed/avatar2/100/100', title: 'Showcase: My new portfolio design. Feedback welcome!', contentSnippet: 'Hey everyone, I just finished redesigning my portfolio website from scratch using Figma and Webflow. I\'d love to get some feedback on the UI and user experience...', timestamp: '1 day ago', replies: 25, views: 432, tags: ['ui', 'ux', 'portfolio', 'feedback'] },
  { id: 'cp3', author: 'CodeNinja', authorAvatarUrl: 'https://picsum.photos/seed/avatar3/100/100', title: 'Best practices for REST API design in 2025?', contentSnippet: 'Starting a new project and I want to make sure my API design is solid. What are the current best practices regarding versioning, authentication, and error handling?', timestamp: '2 days ago', replies: 8, views: 289, tags: ['api', 'backend', 'best-practices'] },
];

export const MOCK_MEDIA: MediaItem[] = [
    { id: 'm1', type: 'image', title: 'Kohaq Annual Hackathon 2024', thumbnailUrl: 'https://picsum.photos/seed/media1/600/400', url: 'https://picsum.photos/seed/media1/1200/800' },
    { id: 'm2', type: 'video', title: 'Intern Success Story: From Kohaq to Google', thumbnailUrl: 'https://picsum.photos/seed/media2/600/400', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 'm3', type: 'image', title: 'Our New Campus', thumbnailUrl: 'https://picsum.photos/seed/media3/600/400', url: 'https://picsum.photos/seed/media3/1200/800' },
    { id: 'm4', type: 'image', title: 'Guest Lecture by Tech CEO', thumbnailUrl: 'https://picsum.photos/seed/media4/600/400', url: 'https://picsum.photos/seed/media4/1200/800' },
    { id: 'm5', type: 'video', title: 'A Day in the Life of a Kohaq Intern', thumbnailUrl: 'https://picsum.photos/seed/media5/600/400', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 'm6', type: 'image', title: 'Project Demo Day', thumbnailUrl: 'https://picsum.photos/seed/media6/600/400', url: 'https://picsum.photos/seed/media6/1200/800' },
];