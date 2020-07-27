import React from "react";
import { Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideContainerProps = {
  className?: string; // Pass down className to allow overriding styles
  isBorderless?: boolean;
  shouldJustifyContent?: boolean;
};

/**
 * The base slide container
 */
export const SlideContainerBase: React.FC<SlideContainerProps> = (props) => {
  const { className, isBorderless = false } = props;
  return (
    <Box className={className} sx={sxContainerBase(isBorderless)}>
      {props.children}
    </Box>
  );
};

/**
 * The standard slide container
 * It is positioned absolute so that it overlays on top of the slide container
 */
export const SlideContainer: React.FC<SlideContainerProps> = (props) => {
  const { className, isBorderless = false, shouldJustifyContent = false } = props;
  return (
    <Box className={className} sx={sxContainer(isBorderless, shouldJustifyContent)}>
      {props.children}
    </Box>
  );
};

/**
 * Styles
 */
const sxContainerBase = (isBorderless: boolean): SystemStyleObject => {
  return {
    position: "relative",
    zIndex: 1,
    color: "white100",
    padding: isBorderless
      ? [4, null, null, null, 6, null, null, 7, null, 8]
      : [2, null, null, null, 3, null, null, 4, null, 5],
  };
};

const sxContainer = (isBorderless: boolean, shouldJustifyContent: boolean): SystemStyleObject => {
  return {
    ...sxContainerBase(isBorderless),
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: shouldJustifyContent ? "flex-end" : "normal",
  };
};
