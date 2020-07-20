import React from "react";
import { Text } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideDescriptionProps = {
  // empty
};

export const SlideDescription: React.FC<SlideDescriptionProps> = (props) => {
  const {} = props;
  return <Text sx={sxDescription()}>{props.children}</Text>;
};

/**
 * Styles
 */
const sxDescription = (): SystemStyleObject => {
  return {
    color: "inherit",
    outline: "4px dotted mediumslateblue", // TODO remove
  };
};
