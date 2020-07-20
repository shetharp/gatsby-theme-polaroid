/** @jsx */
import React, { ReactText, ReactNode } from "react";
import { jsx, Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { SlideImage } from "./slide-image";
import { SlideOverlay } from "./slide-overlay";
import { SlideContainer } from "./slide-container";
import { SlideTitle } from "./slide-title";
import { SlideDescription } from "./slide-description";
import { SlideButton } from "./slide-button";

export type SlideProps = {
  id: string;
  title?: ReactText;
  description?: ReactNode;
  fluid?: unknown; // TODO
  overlayColor?: string;
  highlightColor?: string;
  isColorful?: boolean;
  isExpanded?: boolean;
  isBorderless?: boolean;
  imagePosition?: string;
  button?: ReactNode; // TODO
};

export const Slide: React.FC<SlideProps> = (props) => {
  const {
    id,
    title,
    description,
    fluid,
    overlayColor = "#000000",
    highlightColor = "#000000",
    isColorful = false,
    isExpanded = false,
    isBorderless = false,
    imagePosition = "50% 50%",
    button,
  } = props;

  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "kite-festival-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" id={id} bg="accent" sx={sxSlide(isBorderless)}>
      <SlideImage fluid={data.file.childImageSharp.fluid} loading="eager" />

      <SlideOverlay overlayColor={overlayColor} isColorful={isColorful} />

      <SlideContainer isBorderless={isBorderless}>
        <Box sx={sxBody}>
          <SlideTitle>Savor the moment slowly, before it slips away.</SlideTitle>
          <SlideDescription>
            I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to
            the goddess (Bendis, the Thracian Artemis.); and also because I wanted to see in what manner they would
            celebrate the festival, which was a new thing.
          </SlideDescription>
        </Box>

        {/* TODO Render the button if its props exist */}
        <SlideButton>Slide Button</SlideButton>
      </SlideContainer>
    </Box>
  );
};
export default Slide;

/**
 * Types
 */

/**
 * Styles
 */
const sxSlide = (isBorderless: boolean): SystemStyleObject => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    // marginBottom: "-16px", // TODO Pull this from the theme
    border: "40px solid mediumvioletred", // TODO Pull this from the theme
  };
};

const sxBody: SystemStyleObject = {};
