export type Language = 'te' | 'en' | 'hi';

export interface NavItem {
  id: string;
  path: string;
  label: Record<Language, string>;
}

export interface Product {
  id: string;
  category: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  benefits: Record<Language, string>;
  sizes: string[];
  imageDesc: string;
  unsplashUrl: string;
}

export interface PageContent {
  title: Record<Language, string>;
  subtitle?: Record<Language, string>;
  sections: SectionData[];
}

export interface SectionData {
  type: 'hero' | 'text' | 'image-text' | 'stats' | 'grid' | 'cards' | 'form' | 'process';
  title?: Record<Language, string>;
  content?: Record<Language, string>;
  items?: any[];
  imageDesc?: string;
  unsplashUrl?: string;
  reverse?: boolean; // For image-text alternation
}

export interface Recipe {
  id: string;
  title: Record<Language, string>;
  desc: Record<Language, string>;
  imageDesc: string;
  unsplashUrl: string;
}

export interface GlobalState {
  lang: Language;
  setLang: (lang: Language) => void;
}