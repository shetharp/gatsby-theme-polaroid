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
  hasDistinctBorder?: boolean;
  hasScrollIndicator?: boolean;
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
    hasDistinctBorder = false,
    hasScrollIndicator = false,
    imagePosition = "50% 50%",
    button,
    children,
  } = props;

  return (
    <Box as="section" id={id} sx={sxSlide(isBorderless, hasDistinctBorder, hasScrollIndicator, highlightColor)}>
      {!!fluid && <SlideImage fluid={fluid} imagePosition={imagePosition} loading="eager" />}

      {!!overlayColor && <SlideOverlay overlayColor={overlayColor} isColorful={isColorful} />}

      {/* If the slide has the children prop passed in, render the custom slide content. Otherwise, render the standard slide format. */}
      {!!children ? (
        children
      ) : (
        <SlideContainer isBorderless={isBorderless} shouldJustifyContent>
          <Box sx={sxBody}>
            <SlideTitle isExpanded={isExpanded} shouldAdjustWidth>
              {title}
            </SlideTitle>
            <SlideDescription highlightColor={highlightColor} isExpanded={isExpanded} shouldAdjustWidth>
              {description}
            </SlideDescription>
          </Box>

          {!!button && (
            <SlideButton href={button.href} isBorderless={isBorderless}>
              {button.text}
            </SlideButton>
          )}
        </SlideContainer>
      )}
    </Box>
  );
};
export default Slide;

/**
 * Styles
 */
export const sxSlideBase = (isBorderless: boolean, hasDistinctBorder: boolean): SystemStyleObject => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "auto",
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    marginBottom: isBorderless || hasDistinctBorder ? 0 : [-2, null, null, null, -3, null, null, -4, null, -5],
    borderWidth: isBorderless ? 0 : ["16px", null, null, null, "24px", null, null, "32px", null, "40px"],
    borderStyle: "solid",
    borderColor: "transparent",
    backgroundColor: "background",
    transition: (theme) => theme.transitions.default,
  };
};

const sxScrollIndicator = (highlightColor: string): SystemStyleObject => {
  return {
    ["@keyframes animateSlideScrollIndicator"]: {
      "0%": {
        opacity: 1,
        transform: "translate(100%, 0px) rotate(-90deg)",
      },
      "100%": {
        opacity: 0.6,
        transform: "translate(100%, 40px) rotate(-90deg)",
      },
    },
    ["::after"]: {
      content: "'<< SCROLL'",
      fontSize: ["10px", null, null, null, "12px", null, null, "14px", null, 0],
      fontFamily: "heading",
      letterSpacing: "0.5ch",
      color: "white",
      background: highlightColor,
      display: "flex",
      alignItems: "center",
      height: ["16", null, null, null, "24", null, null, "32", null, "40"],
      paddingLeft: [6, null, null, null, null, null, null, null, null, 7],
      paddingRight: [1, null, null, null, 2, null, null, 3, null, 4],
      position: "absolute",
      bottom: 0,
      right: [0, null, 2, null, 3, null, null, 4, null, 5],
      transform: "translateX(100%) rotate(-90deg)",
      transformOrigin: "bottom left",
      animation: "animateSlideScrollIndicator 2s ease-in alternate infinite",
    },
  };
};

const sxSlide = (
  isBorderless: boolean,
  hasDistinctBorder: boolean,
  hasScrollIndicator: boolean,
  highlightColor: string
): SystemStyleObject => {
  return {
    ...sxSlideBase(isBorderless, hasDistinctBorder),
    height: "100vh",
    minHeight: (theme) => [theme.breakpoints[1], null, null, null, null, null, theme.breakpoints[2]],

    ...(hasScrollIndicator && sxScrollIndicator(highlightColor)),
  };
};

const sxBody: SystemStyleObject = {};
