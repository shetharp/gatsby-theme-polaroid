/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import Slide from "./slide";
import { SlideContainer } from "./slide-container";
import { SlideTitle } from "./slide-title";

export type SlideBlogProps = {
  // empty
};

export const SlideBlog: React.FC<SlideBlogProps> = (props) => {
  return (
    <Slide id="blog" isBorderless isColorful>
      <SlideContainer isBorderless>
        <SlideTitle isExpanded={false}>Latest Posts</SlideTitle>
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
