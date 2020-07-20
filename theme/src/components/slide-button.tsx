import React from "react";
import { Button } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideButtonProps = {
  // empty
};

export const SlideButton: React.FC<SlideButtonProps> = (props) => {
  const {} = props;
  return <Button sx={sxButton()}>{props.children}</Button>;
};

/**
 * Styles
 */
const sxButton = (): SystemStyleObject => {
  return {};
};
