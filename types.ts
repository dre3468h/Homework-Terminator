export enum UserRole {
  GUEST = 'GUEST',
  CUSTOMER = 'CUSTOMER',
  WRITER = 'WRITER',
  AGENT = 'AGENT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  // Specific fields based on role could be expanded here
  balance?: number; // For agents
  preferences?: string[]; // For writers
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string; // Hidden for guests
  icon: string;
  category: 'counselling' | 'ghostwriting' | 'package';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Full-time Nurse Student"
  content: string;
  rating: number;
}
