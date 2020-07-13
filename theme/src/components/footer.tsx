/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import React from "react";
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "../hooks/use-site-metadata";

export type FooterProps = {
  // empty
};

export const Footer: React.FC<FooterProps> = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer sx={sxFooter}>
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/shetharp/gatsby-theme-polaroid"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.arpitsheth.com">
          Arpit Sheth
        </Link>
      </div>
    </footer>
  );
};
export default Footer;

/**
 * Styles
 */

const sxFooter = {
  outline: `4px solid mediumslateblue`, // TODO Remove
  boxSizing: `border-box`,
  display: `flex`,
  justifyContent: `space-between`,
  mt: [6],
  color: `secondary`,
  a: {
    variant: `links.secondary`,
  },
  flexDirection: [`column`, `column`, `row`],
  variant: `dividers.top`,
};
