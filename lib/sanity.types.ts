export interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  order: number;
}

export interface Award {
  _id: string;
  title: string;
  year: number;
  event: string;
  description: string;
  goldMedals: number;
  silverMedals: number;
  bronzeMedals: number;
  imageUrl: string | null;
}

export interface Location {
  _id: string;
  name: string;
  isHeadquarters: boolean;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  openingHours: string;
  imageUrl: string | null;
  order: number;
}

export interface ContactDepartment {
  _id: string;
  department: string;
  personName: string;
  personTitle: string;
  phone: string;
  additionalPhones: string[] | null;
  email: string;
  order: number;
}

export interface SiteSettings {
  companyName: string;
  slogan: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  heroImageUrl: string | null;
  aboutText: string;
}
