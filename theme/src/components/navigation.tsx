/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React from "react";
import { jsx, NavLink } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replaceSlashes";
import { SystemStyleObject } from "@styled-system/css";

export type NavigationProps = {
  // empty
};

export const Navigation: React.FC<NavigationProps> = () => {
  const { basePath, navigation } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {navigation && navigation.length > 0 && (
        <nav sx={sxNav}>
          {/* <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}> */}
          {navigation.map((item) => (
            // @ts-ignore
            <NavLink key={item.slug} as={Link} to={replaceSlashes(`/${basePath}/${item.slug}`)} sx={sxNavLink}>
              {item.title}
            </NavLink>
          ))}
        </nav>
      )}
    </React.Fragment>
  );
};
export default Navigation;

/**
 * Styles
 */

const sxNav: SystemStyleObject = {
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  overflow: "hidden",
  border: "2px dashed mediumspringgreen",
  height: "100%",
};

const sxNavLink: SystemStyleObject = {
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  height: "100%",
  marginLeft: [2, null, null, null, 3, null, null, 4, null, 5],
};
