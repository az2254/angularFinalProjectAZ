import { Comment } from './comment';
// create the Samples class that will define this object 
export class Samples {
  id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  description: string;
  comments: Comment[];
}