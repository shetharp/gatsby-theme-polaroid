/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box, Text } from "@theme-ui/components";
import { SystemStyleObject } from "@styled-system/css";
import { Link } from "gatsby";
import ItemTags from "./item-tags";
import { Post } from "../types/posts";

export type BlogListItemProps = {
  className?: string; // Pass down className to allow overriding styles
  post: Post;
  showTags?: boolean;
};

export const BlogListItem: React.FC<BlogListItemProps> = (props) => {
  const { className, post, showTags = true } = props;
  return (
    <Box as="article" className={className} sx={sxBlogPostItem}>
      {/* @ts-ignore */}
      <TLink as={Link} to={post.slug} sx={sxBlogPostTitleLink}>
        <Text sx={sxBlogPostTitle}>{post.title}</Text>
      </TLink>

      <p sx={sxBlogPostDetails}>
        <time>{post.date}</time>

        {post.tags && showTags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </p>
    </Box>
  );
};
export default BlogListItem;

/**
 * Styles
 */
const sxBlogPostItem: SystemStyleObject = {
  marginBottom: [4, null, null, null, 5, null, 6, 7, 8],
};

const sxBlogPostTitleLink: SystemStyleObject = {
  color: "inherit",
  textDecoration: "none",
  [":hover"]: {
    textDecoration: "underline",
  },
};

const sxBlogPostTitle: SystemStyleObject = {
  color: "inherit",
  lineHeight: "heading",
  fontWeight: "heading",
  fontSize: [1, null, null, 2, null, null, 3, null, 4], // Size up from SlideDescription fontSize
};

const sxBlogPostDetails: SystemStyleObject = {
  fontSize: [0, null, null, null, null, null, 1, null, 2],
  fontFamily: "monospace",
  marginY: [0, null, null, null, null, null, 1],
  opacity: 0.5,
};
