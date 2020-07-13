import { Theme } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import "typeface-dm-sans";

// ==================================================
// Theme type
// ==================================================
export type ThemePolaroid = Theme & {
  styles: Theme["styles"] & { del: SystemStyleObject };
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
};

const breakpoints: ThemePolaroid["breakpoints"] = Object.values(breakpointsDict);

// ==================================================
// Theme scale > Colors
// ==================================================
const palette = {
  white: "#FFFFFF",
  fairWhite: "#F2F2F2",
  genuineSilver: "#828291",
  reliableGray: "#424150",
  impartialGray: "#2A2A36",
  black: "#000000",
  neutral: ["#FFFFFF", "#F2F2F2", "#828291", "#424150", "#2A2A36", "#000000"],
  candidOrange: "#F18F01",
  directRed: "#ED254E",
  virtuousViolet: "#B721FF",
  unyieldingYellow: "#F8E71C",
  crispEucalyptus: "#40F99B",
  clearBlue: "#21D4FD",
  equitableBlue: "#3F89FF",
  properBlue: "#102341",
};

const colors: ThemePolaroid["colors"] = {
  ...palette,
  text: palette.neutral[4],
  background: palette.neutral[0],
  primary: palette.candidOrange,
  secondary: palette.clearBlue,
  accent: palette.crispEucalyptus,
  highlight: palette.equitableBlue,
  muted: palette.genuineSilver,

  // Custom Color Definitions
  toggleIcon: palette.neutral[2],
  heading: palette.black,
  divide: palette.neutral[1],

  modes: {
    dark: {
      text: palette.neutral[0],
      background: palette.properBlue,
      primary: palette.candidOrange,
      secondary: palette.clearBlue,
      accent: palette.crispEucalyptus,
      highlight: palette.equitableBlue,
      muted: palette.genuineSilver,

      // Custom Color Definitions
      toggleIcon: palette.neutral[1],
      heading: palette.white,
      divide: palette.neutral[4],
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
  header: 999,
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

const shadows: ThemePolaroid["shadows"] = {};

// ==================================================
// Transitions
// ==================================================
const transitions: ThemePolaroid["transitions"] = {
  default: "all 200ms ease",
  fast: "all 100ms ease",
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
    color: "neutral.3",
    backgroundColor: "neutral.1",
    maxWidth: "full",
    overflow: "scroll",
    padding: 2,
  },
  code: { fontFamily: "monospace", color: "secondary" },
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
    color: "background",
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
    borderWidth: "md",
    borderStyle: ["solid", "solid", "dashed", "dotted", "solid", "dashed", "dotted", "solid", "dashed", "dotted"],
    borderColor: ["primary", "accent", null, null, "highlight", null, null, "muted"],

    width: [`calc(100% - ${space[2]})`, null, null, null, `calc(100% - ${space[3]})`],
    maxWidth: "tabletM",
    paddingY: 4,
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
    transform: "scale(0.95)",
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
  heading: {
    ...baseHeading,
    fontSize: [4, null, 5, null, 6],
    color: "primary",
  },
  subheading: {
    ...baseHeading,
    marginTop: 0,
    fontSize: [2, null, 3, null, 4],
    color: "muted",
  },
};

const links: ThemePolaroid["links"] = {
  secondary: {
    color: "secondary",
  },
};

const cards: ThemePolaroid["cards"] = {
  primary: {
    borderWidth: "sm",
    borderStyle: "solid",
    borderColor: "neutral.2",
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
    color: "white",
  },
  secondary: {
    backgroundColor: "secondary",
    color: "white",
  },
  accent: {
    backgroundColor: "accent",
    color: "white",
  },
  highlight: {
    backgroundColor: "highlight",
    color: "white",
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
  cards,
  forms,
  badges,
  alerts,
  messages,
};
export default themePolaroid;
