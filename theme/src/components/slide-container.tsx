import React from "react";
import { Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideContainerProps = {
  isBorderless: boolean;
};

export const SlideContainer: React.FC<SlideContainerProps> = (props) => {
  const { isBorderless } = props;
  return <Box sx={sxContainer(isBorderless)}>{props.children}</Box>;
};

/**
 * Styles
 */
const sxContainer = (isBorderless: boolean): SystemStyleObject => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white", // TODO theme,
    padding: isBorderless ? "32px" : "16px", // TODO theme
  };
};
