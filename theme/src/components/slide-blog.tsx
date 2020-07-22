/** @jsx jsx */
import React from "react";
import { jsx, Grid, Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import { Link } from "gatsby";
import { sxSlideBase } from "./slide";
import { SlideOverlay } from "./slide-overlay";
import { SlideContainerBase } from "./slide-container";
import { SlideTitle } from "./slide-title";
import BlogList from "./blog-list";
import { Post } from "../types/post";
import replaceSlashes from "../utils/replaceSlashes";
import { useMinimalBlogConfig } from "../hooks";
import { SlideDescription } from "./slide-description";

export type SlideBlogProps = {
  id: string;
  className?: string;
  overlayColor?: string | null;
  isColorful?: boolean;
  isBorderless?: boolean;
  hasDistinctBorder?: boolean;
  posts: Post[];
};

export const SlideBlog: React.FC<SlideBlogProps> = (props) => {
  const {
    id,
    className,
    overlayColor = "primary",
    isColorful = false,
    isBorderless = false,
    hasDistinctBorder = false,
    posts,
  } = props;
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Box as="section" id={id} className={className} sx={sxSlideBlog(isBorderless, hasDistinctBorder)}>
      {!!overlayColor && <SlideOverlay overlayColor={overlayColor} isColorful={isColorful} />}

      <SlideContainerBase>
        <Grid columns={[1, null, null, null, 2]} gap={[4, null, null, null, 6, null, null, 7, null, 8]}>
          <Box>
            <SlideTitle>Latest Posts</SlideTitle>
            <Box sx={sxSectionDetails}>
              <BlogList posts={posts} showTags={false} />
              <SlideDescription>
                <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
              </SlideDescription>
            </Box>
          </Box>
          <Box>{props.children}</Box>
        </Grid>
      </SlideContainerBase>
    </Box>
  );
};

/**
 * Styles
 */
const sxSlideBlog = (isBorderless: boolean, hasDistinctBorder: boolean): SystemStyleObject => {
  return {
    ...sxSlideBase(isBorderless, hasDistinctBorder),
    backgroundColor: "clearBlue",
  };
};

const sxSectionDetails: SystemStyleObject = {
  marginTop: [2, null, null, null, 3, null, null, 4, null, 5], // Match with SlideDescription marginTop
};
