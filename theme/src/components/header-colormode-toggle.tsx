/** @jsx jsx */
import React from "react";
import { jsx, useColorMode, Flex } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import ColorModeToggle from "./colormode-toggle";

export type HeaderColorModeToggleProps = {
  // empty
};

export const HeaderColorModeToggle: React.FC<HeaderColorModeToggleProps> = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDarkMode = colorMode === `dark`;

  const toggleColorMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorMode(isDarkMode ? `light` : `dark`);
  };

  return (
    <Flex sx={sxFlex}>
      <ColorModeToggle isDark={isDarkMode} toggle={toggleColorMode} />
    </Flex>
  );
};
export default HeaderColorModeToggle;

/**
 * Styles
 */

const sxFlex: SystemStyleObject = {
  marginLeft: [2, null, null, null, 3, null, null, 4, null, 5],
};
