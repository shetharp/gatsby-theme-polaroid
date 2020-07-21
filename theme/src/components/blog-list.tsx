/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogListItem from "./blog-list-item";
import { Post } from "../types/posts";

export type BlogListProps = {
  posts: Post[];
  className?: string; // Pass down className to allow overriding styles
  showTags?: boolean;
};

export const BlogList: React.FC<BlogListProps> = ({ posts, className = ``, showTags = true }) => (
  <section className={className}>
    {posts.map((post) => (
      <BlogListItem key={post.slug} post={post} showTags={showTags} />
    ))}
  </section>
);

export default BlogList;
