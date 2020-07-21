import { graphql } from "gatsby";

/**
 * A graphQL fragment used to configure a reusable query for slide images
 * https://codebushi.com/using-gatsby-image/
 * https://www.gatsbyjs.org/packages/gatsby-image/#fragments
 */
export const slideImageFragment = graphql`
  fragment slideImageFragment on File {
    childImageSharp {
      fluid(maxWidth: 4000, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export default slideImageFragment;
