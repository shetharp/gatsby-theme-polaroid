import { Theme } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import "typeface-dm-sans";

// ==================================================
// Theme type
// ==================================================
export type ThemePolaroid = Theme & {
  styles: Theme["styles"] & { del: SystemStyleObject };
  mediaQuery: { [k: string]: string };
  dividers: { [k: string]: SystemStyleObject };
  opacities: { [k: string]: string };
  transitions: { [k: string]: string };
};

// ==================================================
// Theme scale > Breakpoints
// ==================================================
const breakpointsDict = {
  mobileS: "320px", // breakpoints[0]
  mobileM: "480px",
  mobileL: "640px", // breakpoints[2]
  tabletS: "800px",
  tabletM: "960px", // breakpoints[4]
  tabletL: "1120px",
  laptopS: "1280px", // breakpoints[6]
  laptopM: "1440px",
  laptopL: "1600px", // breakpoints[8]
  desktop: "1820px",
};

const breakpoints: ThemePolaroid["breakpoints"] = Object.values(breakpointsDict);

const mediaQuery = {
  mobileS: `(min-width: ${breakpointsDict.mobileS})`, // breakpoints[0]
  mobileM: `(min-width: ${breakpointsDict.mobileM})`,
  mobileL: `(min-width: ${breakpointsDict.mobileL})`, // breakpoints[2]
  tabletS: `(min-width: ${breakpointsDict.tabletS})`,
  tabletM: `(min-width: ${breakpointsDict.tabletM})`, // breakpoints[4]
  tabletL: `(min-width: ${breakpointsDict.tabletL})`,
  laptopS: `(min-width: ${breakpointsDict.laptopS})`, // breakpoints[6]
  laptopM: `(min-width: ${breakpointsDict.laptopM})`,
  laptopL: `(min-width: ${breakpointsDict.laptopL})`, // breakpoints[8]
  desktop: `(min-width: ${breakpointsDict.desktop})`,
};

// ==================================================
// Theme scale > Colors
// ==================================================
const palette = {
  white100: "#FFFFFF",
  white80: "rgba(255, 255, 255, 0.8)",
  white50: "rgba(255, 255, 255, 0.5)",
  white20: "rgba(255, 255, 255, 0.2)",

  flash100: "#EEEEEE",
  flash80: "rgba(238, 238, 238, 0.8)",
  flash50: "rgba(238, 238, 238, 0.8)",
  flash20: "rgba(238, 238, 238, 0.8)",

  silver100: "#CCCCCC",
  silver80: "rgba(204, 204, 204, 0.8)",
  silver50: "rgba(204, 204, 204, 0.5)",
  silver20: "rgba(204, 204, 204, 0.2)",

  black100: "#000000",
  black80: "rgba(0, 0, 0, 0.8)",
  black50: "rgba(0, 0, 0, 0.5)",
  black20: "rgba(0, 0, 0, 0.2)",

  film100: "#212121",
  film80: "rgba(33, 33, 33, 0.8)",
  film50: "rgba(33, 33, 33, 0.5)",
  film20: "rgba(33, 33, 33, 0.2)",

  carbon100: "#333333",
  carbon80: "rgba(51, 51, 51, 0.8)",
  carbon50: "rgba(51, 51, 51, 0.5)",
  carbon20: "rgba(51, 51, 51, 0.2)",

  // Base colors increment by 30 degrees in hue
  // Base colors have been tested to have good contrast on light and dark backgrounds
  // Light and Dark colors were computed using lighten and darken functions on the base color by 80%
  saffron: { base: "#F45454", light: "#FAE2E2", dark: "#3B0703" },
  mango: { base: "#FF9933", light: "#FCEEDD", dark: "#412207" },
  lemon: { base: "#EBEB47", light: "#FBFBE2", dark: "#3F3E0E" },
  lime: { base: "#A6FB51", light: "#F3FEE3", dark: "#2D4810" },
  aloe: { base: "#83FC83", light: "#EEFEEC", dark: "#225313" },
  eucalyptus: { base: "#51FBA6", light: "#E6FEF1", dark: "#1C4827" },
  crystal: { base: "#3DF5F5", light: "#E3FDFE", dark: "#194243" },
  azure: { base: "#007FFF", light: "#D6EAFD", dark: "#051C39" },
  lavender: { base: "#5555F5", light: "#E1E2FC", dark: "#000746" },
  veronica: { base: "#A459EF", light: "#EEE4FB", dark: "#200A42" },
  blush: { base: "#F668F6", light: "#FAE7FD", dark: "#460D4B" },
  rose: { base: "#F23C97", light: "#F8DFED", dark: "#3B0821" },
  alloy: { base: "#CCCCCC", light: "#F7F7F7", dark: "#2E2E2E" },
};

const colors: ThemePolaroid["colors"] = {
  ...palette,
  text: palette.carbon100,
  background: palette.white100,
  primary: palette.crystal.base,
  secondary: palette.saffron.base,
  accent: palette.film50,
  highlight: palette.silver80,
  muted: palette.flash100,

  modes: {
    dark: {
      text: palette.white100,
      background: palette.film100,
      primary: palette.crystal.base,
      secondary: palette.saffron.base,
      accent: palette.silver50,
      highlight: palette.black80,
      muted: palette.carbon100,
    },
  },
};

// ==================================================
// Theme scale > Typography
// ==================================================
const fonts: ThemePolaroid["fonts"] = {
  body:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: '"DM Sans", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  monospace: '"DM Sans", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const fontSizes: ThemePolaroid["fontSizes"] = [16, 18, 20, 24, 28, 32, 40, 48, 60, 72];

const fontWeights: ThemePolaroid["fontWeights"] = {
  body: 300,
  bold: 500,
  heading: 700,
};

const letterSpacings: ThemePolaroid["letterSpacings"] = {};

const lineHeights: ThemePolaroid["lineHeights"] = {
  body: 1.667,
  heading: 1.125,
};

// ==================================================
// Theme scale > Space
// ==================================================
const spaceDict = {
  "0": "0px", // space[0]
  "8": "8px",
  "16": "16px", // space[2]
  "24": "24px",
  "32": "32px", // space[4]
  "40": "40px",
  "48": "48px", // space[6]
  "64": "64px",
  "80": "80px", // space[8]
  "96": "96px",
  "128": "128px", // space[10]
  "256": "256px",
};

const space: ThemePolaroid["space"] = Object.values(spaceDict);

const sizes: ThemePolaroid["sizes"] = {
  ...spaceDict,
  ...breakpointsDict,
  full: "100%",
  screenHeight: "100vh",
  screenWidth: "100vw",
};

const zIndices: ThemePolaroid["zIndices"] = {
  header: 9999,
  headerMenu: 999,
};

// ==================================================
// Theme scale > Borders
// ==================================================
const borders: ThemePolaroid["borders"] = {};

const borderWidths: ThemePolaroid["borderWidths"] = {
  "0": "0",
  none: "0",
  sm: "2px",
  md: "4px",
  lg: "8px",
};

const borderStyles: ThemePolaroid["borderStyles"] = {};

const radii: ThemePolaroid["radii"] = {
  "0": "0",
  none: "0",
  default: "4px",
  full: "100%",
};

// ==================================================
// Theme scale > Opacities + Shadows
// ==================================================
const opacities: ThemePolaroid["opacities"] = {
  "0": "0",
  none: "0",
  low: "0.2",
  half: "0.5",
  high: "0.8",
  full: "1",
};

const shadows: ThemePolaroid["shadows"] = {
  default: `0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05), 0 16px 32px rgba(0, 0, 0, 0.05)`,
};

// ==================================================
// Transitions
// ==================================================
const transitions: ThemePolaroid["transitions"] = {
  default: "all 200ms ease",
  fast: "all 100ms ease",
  slow: "all 300ms ease",
};

// ==================================================
// Theme base style helpers
// ==================================================
const baseTextBlock = {
  marginY: 3,
};
const baseIndentBlock = {
  padding: 0,
  paddingLeft: 6,
};

const baseHeading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  ...baseTextBlock,
  marginTop: 6,
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline", color: "primary" },
  },
};

// ==================================================
// Theme styles
// ==================================================
const styles: ThemePolaroid["styles"] = {
  root: {
    fontSize: [0, null, 1, null, 2],
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
  p: { ...baseTextBlock },
  a: { color: "primary" },
  h1: { ...baseHeading, fontSize: [5, null, 6, null, 7] },
  h2: { ...baseHeading, fontSize: [4, null, 5, null, 6] },
  h3: { ...baseHeading, fontSize: [3, null, 4, null, 5] },
  h4: { ...baseHeading, fontSize: [2, null, 3, null, 4] },
  h5: { ...baseHeading, fontSize: [1, null, 2, null, 3] },
  h6: { ...baseHeading, fontSize: [0, null, 1, null, 2] },
  img: {},
  pre: {
    ...baseTextBlock,
    backgroundColor: "muted",
    maxWidth: "full",
    overflow: "scroll",
    padding: 2,
  },
  code: {
    fontFamily: "monospace",
    color: "secondary",
    backgroundColor: "muted",
    paddingX: "4px",
    borderWidth: "sm",
    borderStyle: "solid",
    borderColor: "muted",
    borderRadius: "default",
  },
  ol: { ...baseTextBlock, ...baseIndentBlock },
  ul: { ...baseTextBlock, ...baseIndentBlock },
  li: { marginY: borderWidths.md, paddingLeft: 1 },
  blockquote: {
    ...baseTextBlock,
    marginX: 4,
    paddingX: 2,
    border: "none",
    borderLeftWidth: "lg",
    borderLeftStyle: "solid",
    borderLeftColor: "muted",
    fontStyle: "italic",
  },
  hr: {
    ...baseTextBlock,
    border: "none",
    height: borderWidths.sm,
    backgroundColor: "muted",
  },
  em: {},
  strong: { fontWeight: "bold" },
  del: { color: "muted" },
  delete: { color: "muted" },
  b: { fontWeight: "bold" },
  i: {},
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  tr: {},
  th: {
    textAlign: "left",
    padding: borderWidths.md,
    border: "none",
    backgroundColor: "muted",
  },
  td: {
    textAlign: "left",
    padding: borderWidths.md,
    borderWidth: "sm",
    borderBottomStyle: "solid",
    borderColor: "muted",
  },
  div: {},
  inlineCode: {},
  thematicBreak: {
    ...baseTextBlock,
    border: "none",
    height: borderWidths.sm,
    backgroundColor: "muted",
  },
};

// ==================================================
// Theme component variants
// ==================================================
const layout: ThemePolaroid["layout"] = {
  container: {
    // TODO Disable when done debugging styles
    // borderWidth: "md",
    // borderStyle: ["solid", "solid", "dashed", "dotted", "solid", "dashed", "dotted", "solid", "dashed", "dotted"],
    // borderColor: ["accent", "primary", null, null, "secondary", null, null, "muted"],

    width: [`calc(100% - ${space[4]})`, null, null, null, `calc(100% - ${space[6]})`],
    maxWidth: "tabletM",
    paddingY: 4,
  },
  containerFull: {
    width: "100%",
    maxWidth: "100%",
  },
};

const baseButton = {
  cursor: "pointer",
  borderRadius: "default",
  paddingX: 4,
  paddingY: 2,
  transition: transitions.fast,
  "&:active": {
    opacity: opacities.high,
  },
};

const buttons: ThemePolaroid["buttons"] = {
  primary: {
    ...baseButton,
    backgroundColor: "primary",
  },
  secondary: {
    ...baseButton,
    backgroundColor: "secondary",
  },
};

const text: ThemePolaroid["text"] = {
  default: { display: "inline" },
  mono: { display: "inline", fontFamily: "monospace" },
  uppercase: { textTransform: "uppercase", letterSpacing: "0.2ch" },
  heading: {
    ...baseHeading,
    fontSize: [4, null, 5, null, 6],
  },
  subheading: {
    ...baseHeading,
    marginTop: 0,
    fontSize: [2, null, 3, null, 4],
    color: "accent",
  },
};

const links: ThemePolaroid["links"] = {
  nav: {
    ...text.uppercase,
    fontSize: [0, null, null, null, 1],
  },
  secondary: {
    color: "secondary",
  },
};

const dividers: ThemePolaroid["dividers"] = {
  pageHeading: {
    ...styles.hr,
    marginTop: 0,
  },
};

const cards: ThemePolaroid["cards"] = {
  primary: {
    borderWidth: "sm",
    borderStyle: "solid",
    borderColor: "highlight",
    borderRadius: "default",
    padding: 1,
  },
};

const forms: ThemePolaroid["forms"] = {};

const badges: ThemePolaroid["badges"] = {
  primary: {
    backgroundColor: "primary",
  },
  secondary: {
    backgroundColor: "secondary",
  },
  accent: {
    backgroundColor: "accent",
  },
  highlight: {
    backgroundColor: "highlight",
  },
};

const alerts: ThemePolaroid["alerts"] = {
  primary: {
    backgroundColor: "primary",
    color: "white100",
  },
  secondary: {
    backgroundColor: "secondary",
    color: "white100",
  },
  accent: {
    backgroundColor: "accent",
    color: "white100",
  },
  highlight: {
    backgroundColor: "highlight",
    color: "white100",
  },
};

const messages: ThemePolaroid["messages"] = {};

// ==================================================
// THEME OBJECT
// Polaroid theme
// https://theme-ui.com/theme-spec
// ==================================================
export const themePolaroid: ThemePolaroid = {
  initialColorModeName: "light",
  breakpoints,
  mediaQuery,
  borders,
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
  styles,
  transitions,
  opacities,
  layout,
  buttons,
  text,
  links,
  dividers,
  cards,
  forms,
  badges,
  alerts,
  messages,
};
export default themePolaroid;
