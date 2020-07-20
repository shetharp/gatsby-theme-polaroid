/** @jsx */
import React from "react";
import { jsx, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export type SlideProps = {
  // empty
};

export const Slide: React.FC<SlideProps> = (props) => {
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
    <Box as="section" bg="accent" sx={{ width: "100vw", height: "100vh", border: "40px solid mediumvioletred" }}>
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
        }}
        imgStyle={{
          objectPosition: "50% 50%",
        }}
      />
    </Box>
  );
};
export default Slide;
