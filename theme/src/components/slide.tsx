/** @jsx */
import React, { ReactText, ReactNode } from "react";
import { jsx, Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import { Link } from "gatsby";
import { GatsbyImageProps } from "gatsby-image";
import { SlideImage } from "./slide-image";
import { SlideOverlay } from "./slide-overlay";
import { SlideContainer } from "./slide-container";
import { SlideTitle } from "./slide-title";
import { SlideDescription } from "./slide-description";
import { SlideButton } from "./slide-button";

export type SlideProps = {
  id: string;
  title?: ReactText;
  description?: ReactNode;
  fluid?: GatsbyImageProps["fluid"];
  overlayColor?: string | null;
  highlightColor?: string;
  isColorful?: boolean;
  isExpanded?: boolean;
  isBorderless?: boolean;
  imagePosition?: string;
  button?: { text: string; href: string };
};

export const Slide: React.FC<SlideProps> = (props) => {
  const {
    id,
    title,
    description,
    fluid,
    overlayColor = "primary",
    highlightColor = "highlight",
    isColorful = false,
    isExpanded = false,
    isBorderless = false,
    imagePosition = "50% 50%",
    button,
  } = props;

  return (
    <Box as="section" id={id} sx={sxSlide(isBorderless)}>
      {!!fluid && <SlideImage fluid={fluid} imagePosition={imagePosition} loading="eager" />}

      {!!overlayColor && <SlideOverlay overlayColor={overlayColor} isColorful={isColorful} />}

      <SlideContainer isBorderless={isBorderless}>
        <Box sx={sxBody}>
          <SlideTitle isExpanded={isExpanded}>{title}</SlideTitle>
          <SlideDescription isExpanded={isExpanded} highlightColor={highlightColor}>
            {description}
          </SlideDescription>
        </Box>

        {!!button && (
          <SlideButton href={button.href} isBorderless={isBorderless}>
            {button.text}
          </SlideButton>
        )}
      </SlideContainer>
    </Box>
  );
};
export default Slide;

/**
 * Types
 */

/**
 * Styles
 */
const sxSlide = (isBorderless: boolean): SystemStyleObject => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    minHeight: (theme) => [theme.breakpoints[1], null, null, null, null, null, theme.breakpoints[2]],
    marginBottom: isBorderless ? 0 : [-2, null, null, null, -3, null, null, -4, null, -5],
    borderWidth: isBorderless ? 0 : ["16px", null, null, null, "24px", null, null, "32px", null, "40px"],
    borderStyle: "solid",
    borderColor: "transparent",
    backgroundColor: "background",
    transition: (theme) => theme.transitions.default,
  };
};

const sxBody: SystemStyleObject = {};
