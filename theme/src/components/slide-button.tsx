/** @jsx jsx */
import React from "react";
import { jsx, Button, Text, Flex } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export type SlideButtonProps = {
  href: string;
  isBorderless: boolean;
};

export const SlideButton: React.FC<SlideButtonProps> = (props) => {
  const { children, href, isBorderless } = props;
  return (
    <a href={href} sx={sxButton(isBorderless)}>
      <Text variant="uppercase">{children}</Text>
    </a>
  );
};

/**
 * Styles
 */
const sxButton = (isBorderless: boolean): SystemStyleObject => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "text",
    backgroundColor: "background",
    borderRadius: 0,
    width: ["100%", null, "75%", "66.667%", "50%", null, "33.333%", null, "25%"],
    height: ["64", null, null, null, null, null, null, null, null, "80"],
    marginTop: isBorderless
      ? [4, null, null, null, 3, null, null, 4, null, 5]
      : [2, null, null, null, 3, null, null, 4, null, 5],
    fontSize: [0, null, null, null, 1], // Match with NavLink fontSize
  };
};
