/** @jsx jsx */
import React from "react";
import { jsx, Link, Container } from "theme-ui";
import { useSiteMetadata } from "../hooks";
import { SystemStyleObject } from "@styled-system/css";

export type FooterProps = {
  // empty
};

export const Footer: React.FC<FooterProps> = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer sx={sxFooter}>
      <Container>
        <div sx={sxFooterInner}>
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
        </div>
      </Container>
    </footer>
  );
};
export default Footer;

/**
 * Styles
 */
const sxFooter: SystemStyleObject = {
  border: `4px solid mediumslateblue`, // TODO Remove
  mt: 6,
};

const sxFooterInner: SystemStyleObject = {
  display: `flex`,
  justifyContent: `space-between`,
  color: `secondary`,
  a: {
    variant: `links.secondary`,
  },
  flexDirection: [`column`, null, null, null, `row`],
};
