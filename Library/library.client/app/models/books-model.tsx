export interface Book {
  id: number;
  title: string;
  author: string;
  category: BookCategory;
}

export enum BookCategory {
  ScienceFiction,
  Classic,
  Philosophy,
  Cooking,
  Horror,
}
