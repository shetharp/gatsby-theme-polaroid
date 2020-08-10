import React from "react";
import { Text } from "theme-ui";
import { alpha } from "@theme-ui/color";
import { SystemStyleObject } from "@styled-system/css";

export type SlideDescriptionProps = {
  className?: string; // Pass down className to allow overriding styles
  highlightColor?: string;
  isExpanded?: boolean;
  shouldAdjustWidth?: boolean;
};

export const SlideDescription: React.FC<SlideDescriptionProps> = (props) => {
  const { className, highlightColor = "highlight", isExpanded = false, shouldAdjustWidth = false } = props;
  return (
    <Text className={className} sx={sxDescription(highlightColor, isExpanded, shouldAdjustWidth)}>
      {props.children}
    </Text>
  );
};

/**
 * Styles
 */
const sxDescription = (highlightColor: string, isExpanded: boolean, shouldAdjustWidth: boolean): SystemStyleObject => {
  const width = shouldAdjustWidth
    ? isExpanded
      ? ["100%", null, "85%", null, "85%", null, "75%", "66.667%", "50%"]
      : ["100%", null, "85%", null, "75%", null, "66.667%", null, "50%"]
    : "100%";

  return {
    color: "white100",
    fontSize: [0, null, null, 1, null, null, 2, null, 3],
    lineHeight: [1.4, null, null, null, null, null, null, null, 1.5],
    marginTop: [2, null, null, null, 3, null, null, 4, null, 5],
    width: width,
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
      borderBottomColor: alpha("white100", 0.5),
      transition: (theme) => theme.transitions.fast,
      paddingX: "0",
      marginX: "2px",
    },
    ["a:hover"]: {
      backgroundColor: alpha(highlightColor, 0.5),
      paddingX: "4px",
      marginX: "-2px",
    },
  };
};
