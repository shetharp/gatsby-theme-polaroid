/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box, Text } from "@theme-ui/components";
import { SystemStyleObject } from "@styled-system/css";
import { Link } from "gatsby";
import ItemTags from "./item-tags";
import { Post } from "../types/posts";

type BlogListItemProps = {
  post: Post;
  showTags?: boolean;
};

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box as="article" mb={4}>
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
export default BlogListItem;

/**
 * Styles
 */
const sxBlogPostTitleLink: SystemStyleObject = {
  color: "inherit",
  textDecoration: "none",
  [":hover"]: {
    textDecoration: "underline",
  },
};

const sxBlogPostTitle: SystemStyleObject = {
  color: "inherit",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  fontSize: [0],
};

const sxBlogPostDetails: SystemStyleObject = {};
