import React from "react";
import { Text } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideTitleProps = {
  // empty
};

export const SlideTitle: React.FC<SlideTitleProps> = (props) => {
  const {} = props;
  return (
    <Text as="h2" sx={sxTitle()}>
      {props.children}
    </Text>
  );
};

/**
 * Styles
 */
const sxTitle = (): SystemStyleObject => {
  return {
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: [4, null, 5, null, 6, null, null, 7, null, 8, 9],
    color: "inherit",
    outline: "2px dashed mediumspringgreen", // TODO remove
  };
};
