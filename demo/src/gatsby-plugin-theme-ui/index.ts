import { merge } from "theme-ui";
import { themePolaroid, ThemePolaroid } from "@shetharp/gatsby-theme-polaroid";
import "typeface-dm-sans";

/**
 * The fonts for this site.
 *
 * "DM Sans" is imported as an npm package `typeface-dm-sans`, allowing it to be self-hosted.
 * Learn more about the Typefaces Project: https://github.com/KyleAMathews/typefaces
 *
 * "DM Mono" is imported with `gatsby-plugin-web-font-loader` from Google Fonts.
 * This plugin can also be used for Adobe Fonts (Typekit).
 */
const fonts: ThemePolaroid["fonts"] = {
  body:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: '"DM Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  monospace: '"DM Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

/**
 * The theme overrides for this site.
 *
 * https://theme-ui.com/packages/gatsby-theme-ui-blog/#theming
 * https://theme-ui.com/guides/merging-themes/
 */
export const themeSite = merge(themePolaroid, {
  fonts,
  fontWeights: {
    body: 300,
    bold: 500,
    heading: 500,
  },
});
export default themeSite;
