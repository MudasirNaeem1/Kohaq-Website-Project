import type { Session, User } from '@supabase/supabase-js';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolled: number;
  price: number | 'Free';
  imageUrl: string;
  duration: string; // e.g., '6h 30m'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Remote' | 'Contract';
  postedDate: string;
  companyLogoUrl: string;
}

export interface Project {
  id: string;
  title: string;
  interns: string[];
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export interface CommunityPost {
  id:string;
  author: string;
  authorAvatarUrl: string;
  title: string;
  contentSnippet: string;
  timestamp: string;
  replies: number;
  views: number;
  tags: string[];
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  thumbnailUrl: string;
  url: string; // URL to the full image or YouTube embed URL
}

export type UserRole = 'Student' | 'Intern' | 'Career Seeker' | 'Partner Company' | 'Admin';

export interface Profile {
  id: string;
  full_name: string;
  role: UserRole;
  avatar_url?: string;
}

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  signOut: () => Promise<void>;
  loading: boolean;
}