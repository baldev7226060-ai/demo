export type PropertyType = 'Residential' | 'Commercial';

export type ServiceType = 
  | 'Interior Painting'
  | 'Exterior Painting'
  | 'Surface Cleaning'
  | 'Residential Painting'
  | 'Commercial Painting'
  | 'Surface Preparation'
  | 'Other';

export type PreferredContact = 'Phone Call' | 'Text Message' | 'Email';

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: PropertyType;
  serviceNeeded: ServiceType;
  projectDetails: string;
  preferredContact: PreferredContact;
  photos: string[];
  address?: string;
  timeline?: string;
}

export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  features: string[];
  processSteps: string[];
  idealFor: string;
}

export interface WorkComparisonItem {
  id: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'Commercial' | 'Cleaning' | 'Detailed Work';
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  details: string;
  specs: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  projectType: string;
  reviewText: string;
  verified: boolean;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationBooking {
  consultationType: 'On-Site Estimate' | 'Virtual Video Walkthrough';
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
  propertyType: PropertyType;
  notes: string;
}
