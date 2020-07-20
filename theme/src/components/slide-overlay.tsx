import React from "react";
import { Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideOverlayProps = {
  overlayColor: string;
  isColorful: boolean;
};

export const SlideOverlay: React.FC<SlideOverlayProps> = (props) => {
  const { overlayColor, isColorful } = props;
  return <Box sx={sxOverlay(overlayColor, isColorful)} />;
};

/**
 * Styles
 */
const sxOverlay = (overlayColor: string, isColorful: boolean): SystemStyleObject => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: overlayColor,
    opacity: 0.5,
  };
};
