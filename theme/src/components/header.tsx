/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React, { useCallback, useState, useRef } from "react";
import PropTypes from "prop-types";
import { jsx, useThemeUI } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { SystemStyleObject } from "@styled-system/css";
import HeaderNavigation from "./header-navigation";
import HeaderLogo from "./header-logo";
import HeaderColorModeToggle from "./header-colormode-toggle";
import HeaderMenuToggle from "./header-menu-toggle";
import HeaderExternalLinks from "./header-external-links";
import Headroom from "react-headroom";
import HeaderMenu from "./header-menu";
import { useOnClickOutside } from "../hooks";
import { useKeyPressCallback } from "../hooks";
import { ThemePolaroid } from "../gatsby-plugin-theme-ui";

export type HeaderProps = {
  isTransparent?: boolean;
};

/**
 * Uses react-headroom to show/hide the header when the user scrolls.
 * https://kyleamathews.github.io/react-headroom/
 *
 * TODO: Use <HeaderExternalLinks /> or refactor it (possibly for the Footer)
 */
export const Header: React.FC<HeaderProps> = (props) => {
  const { isTransparent } = props;
  const { theme, colorMode } = useThemeUI();
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = colorMode === `dark`;
  const isTextDark = !isDarkMode && (isFixed || !isTransparent);

  const toggleHeaderMenu = (shouldOpen: boolean) => {
    shouldOpen ? document.body.classList.add("disable-scroll") : document.body.classList.remove("disable-scroll");
    setIsOpen(shouldOpen);
    setIsFixed(shouldOpen);
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
        <header sx={sxHeader(isVisible, isFixed, props.isTransparent || false, theme as ThemePolaroid)}>
          <HeaderLogo isTextDark={isTextDark} />
          <HeaderNavigation isTextDark={isTextDark} />
          <Flex sx={sxFlex}>
            <HeaderColorModeToggle isTextDark={isTextDark} />
            <HeaderMenuToggle isTextDark={isTextDark} isOpen={isOpen} onToggle={() => toggleHeaderMenu(!isOpen)} />
          </Flex>
        </header>
      </Headroom>

      <HeaderMenu isOpen={isOpen} />
    </div>
  );
};
export default Header;

Header.propTypes = {
  isTransparent: PropTypes.bool,
};

/**
 * Styles
 */

const sxHeader = (
  isVisible: boolean,
  isFixed: boolean,
  isTransparent: boolean,
  theme: ThemePolaroid
): SystemStyleObject => ({
  backgroundColor: !isFixed && isTransparent ? "transparent" : "background",
  backgroundImage:
    !isFixed && isTransparent ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)` : "none",
  [`@media ${theme.mediaQuery.laptopS}`]: {
    backgroundImage:
      !isFixed && isTransparent ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)` : "none",
  },
  opacity: isVisible ? 1 : 0,
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  alignItems: "center",
  height: ["48", null, null, null, "64", null, null, "80"],
  width: "100%",
  transition: "all 300ms ease",
});

const sxFlex: SystemStyleObject = {
  height: "100%",
};
