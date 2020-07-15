/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx, Box, NavLink } from "theme-ui";
import { Link } from "gatsby";
import { SystemStyleObject } from "@styled-system/css";
import { useMinimalBlogConfig } from "../hooks";
import replaceSlashes from "../utils/replaceSlashes";

export type HeaderMenuProps = {
  isOpen: boolean;
};

export const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
  const { basePath } = useMinimalBlogConfig();
  const navigation: any[] = []; // TODO Remove

  return (
    <Box sx={sxBox(props.isOpen)}>
      <nav sx={sxNav}>
        {navigation &&
          navigation.length > 0 &&
          navigation.map((item) => (
            <NavLink
              key={item.slug}
              as={Link}
              // @ts-ignore
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
              sx={sxNavLink}
            >
              {item.title}
            </NavLink>
          ))}
      </nav>
    </Box>
  );
};
export default HeaderMenu;

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

/**
 * Types
 */
export type HeaderMenuItem = {
  label: string;
  slug?: string;
  href?: string;
  isVisibleMobile?: boolean;
  isVisibleTablet?: boolean;
};

/**
 * Styles
 */
const sxBox = (isOpen: boolean): SystemStyleObject => ({
  paddingTop: [6, null, null, null, 7, null, null, 8], // Offset by height of header
  backgroundColor: "background",
  height: "100vh",
  width: ["100vw", null, null, null, "66vw", null, "50vw", null, "33vw"],
  position: "fixed",
  top: 0,
  right: 0,
  transform: isOpen ? "translateX(0)" : "translateX(100%)",
  transition: "all 300ms ease-in-out",
});

const sxNav: SystemStyleObject = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  textAlign: "center",
  overflowY: "scroll",
  zIndex: "headerMenu",
};

const sxNavLink: SystemStyleObject = {
  display: "block",
  padding: [2, null, null, null, 3, null, null, 4, null, 5],
};
