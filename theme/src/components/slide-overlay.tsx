import React from "react";
import { useThemeUI, Box } from "theme-ui";
import { alpha } from "@theme-ui/color";
import { SystemStyleObject } from "@styled-system/css";
import { ThemePolaroid } from "../gatsby-plugin-theme-ui";

export type SlideOverlayProps = {
  overlayColor: string;
  isColorful: boolean;
};

export const SlideOverlay: React.FC<SlideOverlayProps> = (props) => {
  const { overlayColor, isColorful } = props;
  const { theme } = useThemeUI();

  return <Box sx={sxOverlay(overlayColor, isColorful, theme as ThemePolaroid)} />;
};

/**
 * Styles
 */

/**
 * Generates gradients from the overlay color
 * https://theme-ui.com/packages/color#advanced-usage
 */
const sxOverlay = (overlayColor: string, isColorful: boolean, theme: ThemePolaroid): SystemStyleObject => {
  const gradientColorfulMobile = `linear-gradient(185deg, ${alpha(overlayColor, 0.4)(theme)} 0%, ${alpha(
    overlayColor,
    0.8
  )(theme)} 50%, ${alpha(overlayColor, 0.9)(theme)} 100%)`;

  const gradientMobile = `linear-gradient(185deg, ${alpha(overlayColor, 0.0)(theme)} 0%, ${alpha(
    overlayColor,
    0.6
  )(theme)} 50%, ${alpha(overlayColor, 0.9)(theme)} 100%)`;

  const gradientColorfulLaptop = `linear-gradient(190deg, ${alpha(overlayColor, 0.3)(theme)} 0%, ${alpha(
    overlayColor,
    0.6
  )(theme)} 50%, ${alpha(overlayColor, 0.9)(theme)} 100%)`;

  const gradientLaptop = `linear-gradient(190deg, ${alpha(overlayColor, 0.0)(theme)} 0%, ${alpha(
    overlayColor,
    0.4
  )(theme)} 50%, ${alpha(overlayColor, 0.6)(theme)} 100%)`;

  return {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: isColorful ? gradientColorfulMobile : gradientMobile,
    [`@media ${theme.mediaQuery.laptopS}`]: {
      backgroundImage: isColorful ? gradientColorfulLaptop : gradientLaptop,
    },
  };
};
