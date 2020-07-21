/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import Slide from "./slide";
import { SlideContainerBase } from "./slide-container";
import { SlideTitle } from "./slide-title";

export type SlideBlogProps = {
  // empty
};

export const SlideBlog: React.FC<SlideBlogProps> = (props) => {
  return (
    <Slide id="blog" isBorderless isColorful>
      <SlideContainerBase isBorderless>
        <SlideTitle isExpanded={false}>Latest Posts</SlideTitle>
      </SlideContainerBase>
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
