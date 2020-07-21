/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogListItem from "./blog-list-item";
import { Post } from "../types/posts";

type ListingProps = {
  posts: Post[];
  className?: string;
  showTags?: boolean;
};

const Listing = ({ posts, className = ``, showTags = true }: ListingProps) => (
  <section sx={{ mb: [10, null, null, null, 11] }} className={className}>
    {posts.map((post) => (
      <BlogListItem key={post.slug} post={post} showTags={showTags} />
    ))}
  </section>
);

export default Listing;
