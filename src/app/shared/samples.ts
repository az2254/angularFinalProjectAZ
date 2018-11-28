import { Comment } from './comment';

export class Samples {
  id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  description: string;
  comments: Comment[];

  }