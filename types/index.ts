export interface Post {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  isFeatured?: boolean;
  content?: string;
  tags: string[];
}
