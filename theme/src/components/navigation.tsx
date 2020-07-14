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
  isTextDark: boolean;
};

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { isTextDark } = props;
  const { basePath, navigation } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {navigation && navigation.length > 0 && (
        <nav sx={sxNav}>
          {navigation.map((item) => (
            <NavLink
              key={item.slug}
              as={Link}
              // @ts-ignore
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
              sx={sxNavLink(isTextDark)}
            >
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
  height: "100%",
};

const sxNavLink = (isTextDark: boolean): SystemStyleObject => ({
  color: isTextDark ? "text" : "white",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  height: "100%",
  marginLeft: [2, null, null, null, 3, null, null, 4, null, 5],
});
