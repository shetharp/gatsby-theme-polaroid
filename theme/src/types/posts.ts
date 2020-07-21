export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  timeToRead?: number;
  tags?: {
    name: string;
    slug: string;
  }[];
};
