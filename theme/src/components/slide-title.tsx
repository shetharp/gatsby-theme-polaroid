import React from "react";
import { Text } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideTitleProps = {
  isExpanded: boolean;
};

export const SlideTitle: React.FC<SlideTitleProps> = (props) => {
  const { isExpanded } = props;
  return (
    <Text as="h2" sx={sxTitle(isExpanded)}>
      {props.children}
    </Text>
  );
};

/**
 * Styles
 */
const sxTitle = (isExpanded: boolean): SystemStyleObject => {
  return {
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    color: "inherit",
    fontSize: [3, null, null, 4, 5, 6, 7, null, 8, 9],
    width: isExpanded
      ? ["100%", null, null, null, null, null, null, "90%"]
      : ["75%", null, null, null, null, null, null, "66.667%"],
    transition: (theme) => theme.transitions.default,
  };
};
