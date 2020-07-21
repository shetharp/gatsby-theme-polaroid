/** @jsx jsx */
import React from "react";
import { jsx, Grid, Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import Slide from "./slide";
import { SlideContainer } from "./slide-container";
import { SlideTitle } from "./slide-title";
import Listing from "./listing";
import { Post } from "../types/posts";

export type SlideBlogProps = {
  posts: Post[];
};

export const SlideBlog: React.FC<SlideBlogProps> = (props) => {
  const { posts } = props;
  return (
    <Slide id="blog" isBorderless isColorful>
      <SlideContainer isBorderless>
        <Grid columns={[1, null, 2]} gap={[2, null, null, null, 3, null, null, 4, null, 5]}>
          <Box>
            <SlideTitle isExpanded={false}>Latest Posts</SlideTitle>
            <Listing posts={posts} showTags={false} />
          </Box>
          <Box>
            <SlideTitle isExpanded={false}>More</SlideTitle>
          </Box>
        </Grid>
      </SlideContainer>
    </Slide>
  );
};

/**
 * Styles
 */
const sxSlideBlog: SystemStyleObject = {
  marginTop: 5,
  border: "8px solid mediumvioletred",
};
