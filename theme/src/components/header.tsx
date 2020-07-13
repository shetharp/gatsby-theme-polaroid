/** @jsx jsx */
import React from "react";
import { jsx, useColorMode } from "theme-ui";
import { Flex } from "@theme-ui/components";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import ColorModeToggle from "./colormode-toggle";
import Navigation from "./navigation";
import HeaderTitle from "./header-title";
import HeaderExternalLinks from "./header-external-links";

export type HeaderProps = {
  // empty
};

export const Header: React.FC<HeaderProps> = () => {
  const { navigation: nav } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header sx={sxHeader}>
      <Flex sx={sxFlex}>
        <HeaderTitle />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div sx={sxDiv}>
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </div>
    </header>
  );
};
export default Header;

/**
 * Styles
 */

const sxHeader = {
  outline: `4px solid mediumslateblue`, // TODO Remove
  mb: [8, null, null, null, 9, null, null, 10],
};

const sxFlex = { alignItems: `center`, justifyContent: `space-between` };

const sxDiv = {
  boxSizing: `border-box`,
  display: `flex`,
  variant: `dividers.bottom`,
  alignItems: `center`,
  justifyContent: `space-between`,
  mt: 3,
  color: `secondary`,
  a: { color: `secondary`, ":hover": { color: `heading` } },
  flexFlow: `wrap`,
};
