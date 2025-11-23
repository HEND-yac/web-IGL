export interface Book {
  id: number;
  title: string;
  author: string;
  publisherEmail: string;
  publisherPhone: string;
  releaseDate: string;
  category: string;
  isAvailable: boolean;
  stock?: number;
}

export const BOOK_CATEGORIES = [
  'Roman',
  'Science', 
  'Histoire',
  'Informatique',
  'Art',
  'Autres'
] as const;

export type BookCategory = typeof BOOK_CATEGORIES[number];