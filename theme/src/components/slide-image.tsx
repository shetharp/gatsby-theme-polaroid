import React from "react";
import Img, { GatsbyImageProps } from "gatsby-image";

export type SlideImageProps = GatsbyImageProps & {
  fluid: Required<GatsbyImageProps["fluid"]>;
};

/**
 * Applies default styles to the Gatsby Image component to make it behave like a background image
 * https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370
 *
 * Set loading prop to "eager" for the first Slide image to make it render on the critical path.
 */
export const SlideImage: React.FC<SlideImageProps> = (props) => {
  const {
    fluid,
    loading,
    style = {
      width: "100%",
      height: "100%",
    },
    imgStyle = {
      objectPosition: "50% 50%",
    },
    ...otherProps
  } = props;

  return <Img fluid={fluid} loading={loading} style={style} imgStyle={imgStyle} {...otherProps} />;
};

/**
 * Styles
 */
