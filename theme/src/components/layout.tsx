/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { Box, Container, jsx } from "theme-ui";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import CodeStyles from "../styles/code";
import SkipNavLink from "./skip-nav";

export type LayoutProps = {
  className?: string;
};

/**
 * The Layout component is used as the default layout for all pages/posts on the site.
 * It applies the global styles to the page using the ThemeProvider.
 */
export const Layout: React.FC<LayoutProps> = ({ children, className = `` }) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        body: {
          "&.disable-scroll": {
            overflow: "hidden",
          },
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: theme.fonts.monospace,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: theme.transitions.default,
          color: "inherit",
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Header isTransparent />
    <Container>
      {/* @ts-ignore */}
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
    </Container>
    <Footer />
  </React.Fragment>
);
export default Layout;
