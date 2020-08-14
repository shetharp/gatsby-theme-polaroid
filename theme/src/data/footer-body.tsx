/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useSiteMetadata } from "../hooks";

export type FooterBodyProps = {
  // empty
};

export const FooterBody: React.FC<FooterBodyProps> = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <div>
      <p>
        &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
      </p>
      <p>
        <small>
          <a
            aria-label="Link to the theme's GitHub repository"
            href="https://github.com/shetharp/gatsby-theme-polaroid"
          >
            Theme
          </a>{" "}
          by{" "}
          <a aria-label="Link to the theme author's website" href="https://www.arpitsheth.com">
            Arpit Sheth
          </a>
        </small>
      </p>
    </div>
  );
};
export default FooterBody;
