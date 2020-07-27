/** @jsx jsx */
import React from "react";
import { jsx, Container, Flex } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import { FooterLogo } from "./footer-logo";
import footerLogoLink from "../data/footer-logo-link";
import FooterBody from "../data/footer-body";

export type FooterProps = {
  // empty
};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer sx={sxFooter}>
      <Container>
        <Flex sx={sxFooterInner}>
          <FooterLogo slug={footerLogoLink} />
          <FooterBody />
        </Flex>
      </Container>
    </footer>
  );
};
export default Footer;

/**
 * Styles
 */
const sxFooter: SystemStyleObject = {
  mt: [6, null, null, null, 7, 8, 9, 10],
};

const sxFooterInner: SystemStyleObject = {
  flexDirection: "column",
  alignItems: "center",
  color: "accent",
  textAlign: "center",
};
