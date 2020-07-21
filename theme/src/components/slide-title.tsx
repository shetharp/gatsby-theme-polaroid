import React from "react";
import { Text } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideTitleProps = {
  isExpanded?: boolean;
  shouldAdjustWidth?: boolean;
};

export const SlideTitle: React.FC<SlideTitleProps> = (props) => {
  const { isExpanded = false, shouldAdjustWidth = false } = props;
  return (
    <Text as="h2" sx={sxTitle(isExpanded, shouldAdjustWidth)}>
      {props.children}
    </Text>
  );
};

/**
 * Styles
 */
const sxTitle = (isExpanded: boolean, shouldAdjustWidth: boolean): SystemStyleObject => {
  const width = shouldAdjustWidth
    ? isExpanded
      ? ["100%", null, null, null, null, null, null, "90%"]
      : ["75%", null, null, null, null, null, null, "66.667%"]
    : "100%";

  return {
    outline: "2px dashed mediumspringgreen", // TODO remove
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    color: "inherit",
    fontSize: [3, null, null, 4, 5, 6, 7, null, 8, 9],
    width: width,
    transition: (theme) => theme.transitions.default,
  };
};
