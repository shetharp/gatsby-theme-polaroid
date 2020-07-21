/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export type SkipNavLinkProps = {
  children: React.ReactNode;
};

export const SkipNavLink: React.FC<SkipNavLinkProps> = ({ children, ...props }) => (
  // @ts-ignore
  <a {...props} sx={{ ...skipNavStyles }} href="#skip-nav" data-skip-link="true">
    {children}
  </a>
);

export default SkipNavLink;

/**
 * Styles
 */
const skipNavStyles = {
  border: 0,
  clip: `react(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  "&:focus": {
    padding: 3,
    position: `fixed`,
    top: `15px`,
    left: `15px`,
    backgroundColor: `heading`,
    color: `background`,
    zIndex: 1,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`,
  },
};
