/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React from "react";
import { jsx, NavLink } from "theme-ui";
import { Link } from "gatsby";
import { useMinimalBlogConfig } from "../hooks";
import replaceSlashes from "../utils/replaceSlashes";
import { SystemStyleObject } from "@styled-system/css";
import { headerNavItems } from "../data/header-nav-items";

export type HeaderNavProps = {
  isTextDark: boolean;
};

export const HeaderNav: React.FC<HeaderNavProps> = (props) => {
  const { isTextDark } = props;
  const { basePath } = useMinimalBlogConfig();

  return (
    <nav sx={sxNav}>
      {headerNavItems.map((navItem) => {
        const isExternalLink = !!navItem.href;
        const navLinkProps = {
          ...(isExternalLink
            ? { href: navItem.href }
            : { as: Link, to: replaceSlashes(`/${basePath}/${navItem.slug}`) }),
        };
        return (
          <NavLink
            key={navItem.label}
            sx={sxNavLink(isTextDark, navItem.isVisibleMobile, navItem.isVisibleTablet)}
            {...navLinkProps}
          >
            {navItem.label}
          </NavLink>
        );
      })}
    </nav>
  );
};
export default HeaderNav;

/**
 * Types
 */
export type HeaderNavItem = {
  label: string;
  slug?: string;
  href?: string;
  isVisibleMobile?: boolean;
  isVisibleTablet?: boolean;
};

/**
 * Styles
 */

const sxNav: SystemStyleObject = {
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  overflow: "hidden",
  height: "100%",
};

const sxNavLink = (isTextDark: boolean, isVisibleMobile?: boolean, isVisibleTablet?: boolean): SystemStyleObject => {
  const displayStyles = [
    isVisibleMobile ? "flex" : "none",
    null,
    null,
    null,
    isVisibleTablet ? "flex" : "none",
    null,
    null,
    "flex",
  ];
  return {
    color: isTextDark ? "text" : "white",
    display: displayStyles,
    alignItems: "center",
    whiteSpace: "nowrap",
    height: "100%",
    marginLeft: [2, null, null, null, 3, null, null, 4, null, 5],
  };
};
