/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "../hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
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
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/shetharp/gatsby-theme-galleon"
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
