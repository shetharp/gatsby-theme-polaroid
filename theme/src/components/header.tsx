/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React, { useCallback, useState, useRef } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { SystemStyleObject } from "@styled-system/css";
import ColorModeToggle from "./colormode-toggle";
import Navigation from "./navigation";
import HeaderLogo from "./header-logo";
import HeaderExternalLinks from "./header-external-links";
import Headroom from "react-headroom";
import HeaderMenu from "./header-menu";
import { useOnClickOutside } from "../hooks/use-on-click-outside";
import { useKeyPressCallback } from "../hooks/use-key-press";
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
 *
 * TODO: Use <HeaderExternalLinks /> or refactor it (possibly for the Footer)
 */
export const Header: React.FC<HeaderProps> = (props) => {
  const { theme, colorMode, setColorMode } = useThemeUI();
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = colorMode === `dark`;

  const toggleColorMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorMode(isDarkMode ? `light` : `dark`);
  };

  const toggleHeaderMenu = (shouldOpen: boolean) => {
    shouldOpen ? document.body.classList.add("disable-scroll") : document.body.classList.remove("disable-scroll");
    setIsOpen(shouldOpen);
  };

  const onEscKey = useCallback(() => {
    toggleHeaderMenu(false);
  }, []);
  useKeyPressCallback("Escape", onEscKey);

  const headerRef = useRef(null);
  useOnClickOutside(headerRef, () => toggleHeaderMenu(false));

  return (
    <div ref={headerRef}>
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
          // @ts-ignore
          zIndex: theme.zIndices && theme.zIndices["header"] ? theme.zIndices["header"] : 999,
        }}
      >
        <header sx={sxHeader(isVisible, isFixed, props.isTransparent || false)}>
          <HeaderLogo isDark={!isDarkMode} />
          <Navigation />
          <Flex>
            <ColorModeToggle isDark={isDarkMode} toggle={toggleColorMode} />
            <img src={iMenuDark} alt="Toggle Menu" width={32} onClick={() => toggleHeaderMenu(!isOpen)} />
          </Flex>
        </header>
      </Headroom>

      <HeaderMenu isOpen={isOpen} />
    </div>
  );
};
export default Header;

/**
 * Styles
 */

const sxHeader = (isVisible: boolean, isFixed: boolean, isTransparent: boolean): SystemStyleObject => ({
  outline: "4px solid mediumslateblue", // TODO Remove
  backgroundColor: !isFixed && isTransparent ? "transparent" : "background",
  opacity: isVisible ? 1 : 0,
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  alignItems: "center",
  height: ["48", null, null, null, "64", null, null, "80"],
  width: "100%",
  transition: "all 300ms ease",
});
