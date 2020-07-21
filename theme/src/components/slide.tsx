/** @jsx */
import React, { ReactText, ReactNode } from "react";
import { jsx, Box } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import { useStaticQuery, graphql, Link } from "gatsby";
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
    overlayColor = "primary",
    highlightColor = "highlight",
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
    <Box as="section" id={id} sx={sxSlide(isBorderless)}>
      <SlideImage fluid={data.file.childImageSharp.fluid} imagePosition={imagePosition} loading="eager" />

      <SlideOverlay overlayColor={overlayColor} isColorful={isColorful} />

      <SlideContainer isBorderless={isBorderless}>
        <Box sx={sxBody}>
          <SlideTitle isExpanded={isExpanded}>Savor the moment slowly, before it slips away.</SlideTitle>
          <SlideDescription isExpanded={isExpanded}>
            I went down yesterday to the <a href="#!">Piraeus with Glaucon</a> the son of Ariston, that I might offer up
            my prayers to the goddess (Bendis, the <Link to="#">Thracian Artemis.</Link>); and also because{" "}
            <em>I wanted to see</em> in what manner they would celebrate the festival, which was a new thing.
          </SlideDescription>
        </Box>

        {/* TODO Render the button if its props exist */}
        <SlideButton isBorderless={isBorderless}>Slide Button</SlideButton>
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
    minHeight: (theme) => [theme.breakpoints[1], null, null, null, null, null, theme.breakpoints[2]],
    marginBottom: isBorderless ? 0 : [-2, null, null, null, -3, null, null, -4, null, -5],
    borderWidth: isBorderless ? 0 : ["16px", null, null, null, "24px", null, null, "32px", null, "40px"],
    borderStyle: "solid",
    borderColor: "transparent",
    backgroundColor: "background",
    transition: (theme) => theme.transitions.default,
  };
};

const sxBody: SystemStyleObject = {};
