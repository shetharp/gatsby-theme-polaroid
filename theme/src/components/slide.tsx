/** @jsx */
import React, { ReactText, ReactNode } from "react";
import { jsx, Box, Text, Button } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
      <Img
        fluid={data.file.childImageSharp.fluid}
        loading="eager" // Set loading="eager" for first slide image to make it load on the critical path
        title=""
        alt=""
        // These styles allow the image to act like a background image by covering the parent container's dimensions.
        // https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370
        style={{
          width: "100%",
          height: "100%",
          // zIndex: -1,
        }}
        imgStyle={{
          objectPosition: "50% 50%",
        }}
      />

      <Box sx={sxOverlay(overlayColor, isColorful)} />
      <Box sx={sxContent(isBorderless)}>
        <Box sx={sxBody}>
          <Text variant="slideTitle">Savor the moment slowly, before it slips away.</Text>
          <Text variant="slideDescription">
            I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to
            the goddess (Bendis, the Thracian Artemis.); and also because I wanted to see in what manner they would
            celebrate the festival, which was a new thing.
          </Text>
        </Box>

        {/* TODO Render the button if its props exist */}
        <Button>Slide Button</Button>
      </Box>
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

const sxOverlay = (overlayColor: string, isColorful: boolean): SystemStyleObject => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    // zIndex: -1,
    width: "100%",
    height: "100%",
    background: overlayColor,
    opacity: 0.5,
  };
};

const sxContent = (isBorderless: boolean): SystemStyleObject => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white", // TODO theme,
    padding: isBorderless ? "32px" : "16px", // TODO theme
  };
};

const sxBody: SystemStyleObject = {};
