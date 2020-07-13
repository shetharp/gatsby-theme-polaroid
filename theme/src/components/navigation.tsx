/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React from "react";
import { jsx, Flex, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replaceSlashes";
import { SystemStyleObject } from "@styled-system/css";

type NavigationProps = {
  // empty
};

export const Navigation = () => {
  const { basePath, navigation } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {navigation && navigation.length > 0 && (
        <nav sx={sxNav}>
          {/* <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}> */}
          {navigation.map((item) => (
            // @ts-ignore
            <TLink key={item.slug} as={Link} activeClassName="active" to={replaceSlashes(`/${basePath}/${item.slug}`)}>
              {item.title}
            </TLink>
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
