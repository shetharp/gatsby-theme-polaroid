import React from "react";
import { Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideContainerProps = {
  isBorderless: boolean;
};

/**
 * The base slide container
 */
export const SlideContainerBase: React.FC<SlideContainerProps> = (props) => {
  const { isBorderless } = props;
  return <Box sx={sxContainerBase(isBorderless)}>{props.children}</Box>;
};

/**
 * The default slide container
 */
export const SlideContainer: React.FC<SlideContainerProps> = (props) => {
  const { isBorderless } = props;
  return <Box sx={sxContainer(isBorderless)}>{props.children}</Box>;
};
export default SlideContainer;

/**
 * Styles
 */
export const sxContainerBase = (isBorderless: boolean): SystemStyleObject => {
  return {
    border: "2px dashed mediumvioletred", // TODO remove
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    color: "white", // TODO theme,
    padding: isBorderless
      ? [4, null, null, null, 6, null, null, 7, null, 8]
      : [2, null, null, null, 3, null, null, 4, null, 5],
  };
};

const sxContainer = (isBorderless: boolean): SystemStyleObject => {
  return {
    ...sxContainerBase(isBorderless),
    justifyContent: "flex-end",
  };
};
