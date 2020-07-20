import React from "react";
import { Text } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideDescriptionProps = {
  isExpanded: boolean;
};

export const SlideDescription: React.FC<SlideDescriptionProps> = (props) => {
  const { isExpanded } = props;
  return <Text sx={sxDescription(isExpanded)}>{props.children}</Text>;
};

/**
 * Styles
 */
const sxDescription = (isExpanded: boolean): SystemStyleObject => {
  return {
    color: "inherit",
    fontSize: [0, null, null, 1, null, null, 2, null, 3],
    lineHeight: [1.4, null, null, null, null, null, null, null, 1.5],
    width: isExpanded
      ? ["100%", null, "85%", null, "85%", null, "75%", "66.667%", "50%"]
      : ["100%", null, "85%", null, "75%", null, "66.667%", null, "50%"],
  };
};
