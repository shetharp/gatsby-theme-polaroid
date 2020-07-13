/** @jsx jsx */
import React, { useState } from "react";
import { jsx, useColorMode } from "theme-ui";
import { Flex } from "@theme-ui/components";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import ColorModeToggle from "./colormode-toggle";
import Navigation from "./navigation";
import HeaderTitle from "./header-title";
import HeaderExternalLinks from "./header-external-links";
import Headroom from "react-headroom";
import Menu from "./menu";
import iMenuDark from "../assets/i-menu-dark.svg";
import iMenuLight from "../assets/i-menu-light.svg";
import iCloseDark from "../assets/i-close-dark.svg";
import iCloseLight from "../assets/i-close-light.svg";

export type HeaderProps = {
  isTransparent?: boolean;
};

/**
 * Uses react-headroom to show/hide the header when the user scrolls.
 * https://kyleamathews.github.io/react-headroom/
 *
 * TODO: Expanded Menu
 * Use `aria-label='Toggle Menu'`
 * https://negomi.github.io/react-burger-menu/
 * https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
 */
export const Header: React.FC<HeaderProps> = (props) => {
  const { navigation: nav } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const isDarkMode = colorMode === `dark`;

  const toggleColorMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorMode(isDarkMode ? `light` : `dark`);
  };

  return (
    <Headroom
      onPin={() => {
        setIsVisible(true);
        setIsFixed(true);
      }}
      onUnpin={() => {
        setIsVisible(false);
      }}
      onUnfix={() => {
        setIsFixed(false);
      }}
      wrapperStyle={{
        position: props.isTransparent ? "absolute" : "relative",
        width: "100%",
      }}
    >
      <header sx={sxHeader(isVisible, isFixed, props.isTransparent || false)}>
        <Flex sx={sxFlex}>
          <HeaderTitle />
          <ColorModeToggle isDark={isDarkMode} toggle={toggleColorMode} />
          <img src={iMenuDark} alt="Toggle Menu" width={32} />
        </Flex>
        <div sx={sxDiv}>
          <Navigation nav={nav} />
          <HeaderExternalLinks />
        </div>
      </header>
    </Headroom>
  );
};
export default Header;

/**
 * Styles
 */

const sxHeader = (isVisible: boolean, isFixed: boolean, isTransparent: boolean) => ({
  outline: `4px solid mediumslateblue`, // TODO Remove
  backgroundColor: !isFixed && isTransparent ? `transparent` : `background`,
  opacity: isVisible ? 1 : 0,
  transition: `all 300ms ease`,
});

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
