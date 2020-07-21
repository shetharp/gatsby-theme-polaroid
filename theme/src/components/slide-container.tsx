import React from "react";
import { Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideContainerProps = {
  isBorderless?: boolean;
  shouldJustifyContent?: boolean;
};

/**
 * The default slide container
 */
export const SlideContainer: React.FC<SlideContainerProps> = (props) => {
  const { isBorderless = false, shouldJustifyContent = false } = props;
  return <Box sx={sxContainer(isBorderless, shouldJustifyContent)}>{props.children}</Box>;
};

/**
 * Styles
 */
const sxContainer = (isBorderless: boolean, shouldJustifyContent: boolean): SystemStyleObject => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: shouldJustifyContent ? "flex-end" : "normal",
    color: "white", // TODO theme,
    padding: isBorderless
      ? [4, null, null, null, 6, null, null, 7, null, 8]
      : [2, null, null, null, 3, null, null, 4, null, 5],
  };
};
