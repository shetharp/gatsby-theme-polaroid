import React from "react";
import { Text } from "theme-ui";
import { alpha } from "@theme-ui/color";
import { SystemStyleObject } from "@styled-system/css";

export type SlideDescriptionProps = {
  isExpanded: boolean;
  highlightColor: string;
};

export const SlideDescription: React.FC<SlideDescriptionProps> = (props) => {
  const { isExpanded, highlightColor } = props;
  return <Text sx={sxDescription(isExpanded, highlightColor)}>{props.children}</Text>;
};

/**
 * Styles
 */
const sxDescription = (isExpanded: boolean, highlightColor: string): SystemStyleObject => {
  return {
    color: "white",
    fontSize: [0, null, null, 1, null, null, 2, null, 3],
    lineHeight: [1.4, null, null, null, null, null, null, null, 1.5],
    width: isExpanded
      ? ["100%", null, "85%", null, "85%", null, "75%", "66.667%", "50%"]
      : ["100%", null, "85%", null, "75%", null, "66.667%", null, "50%"],
    ["em"]: {
      fontStyle: "normal",
      background: alpha(highlightColor, 0.5),
      paddingX: "4px",
      marginX: "-2px",
    },
    ["a"]: {
      textDecoration: "none",
      borderBottomWidth: ["1px", null, null, null, "2px"],
      borderBottomStyle: "solid",
      borderBottomColor: (theme) => alpha("white", 0.5),
      transition: (theme) => theme.transitions.fast,
      paddingX: "4px",
      marginX: "-2px",
    },
    ["a:hover"]: {
      backgroundColor: alpha(highlightColor, 0.5),
    },
  };
};
