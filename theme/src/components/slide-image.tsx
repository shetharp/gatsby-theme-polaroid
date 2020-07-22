import React from "react";
import Img, { GatsbyImageProps } from "gatsby-image";
import { useThemeUI } from "theme-ui";
import { ThemePolaroid } from "../gatsby-plugin-theme-ui";

export type SlideImageProps = GatsbyImageProps & {
  fluid: GatsbyImageProps["fluid"];
  imagePosition?: string;
};

/**
 * Applies default styles to the Gatsby Image component to make it behave like a background image
 * https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370
 *
 * Set loading prop to "eager" for the first Slide image to make it render on the critical path.
 */
export const SlideImage: React.FC<SlideImageProps> = (props) => {
  const { fluid, imagePosition, style, imgStyle, ...otherProps } = props;
  const { colorMode } = useThemeUI();
  const isDarkMode = colorMode === "dark";

  const styleWithDefaults = {
    width: "100%",
    height: "100%",
    ...(isDarkMode && { filter: "brightness(50%)" }),
    ...style,
  };

  const imgStyleWithDefaults = {
    objectPosition: imagePosition,
    ...imgStyle,
  };

  return <Img fluid={fluid} style={styleWithDefaults} imgStyle={imgStyleWithDefaults} {...otherProps} />;
};
