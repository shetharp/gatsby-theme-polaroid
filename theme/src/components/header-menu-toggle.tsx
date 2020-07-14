/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";
import iMenuDark from "../assets/i-menu-dark.svg";
import iMenuLight from "../assets/i-menu-light.svg";
import iCloseDark from "../assets/i-close-dark.svg";
import iCloseLight from "../assets/i-close-light.svg";

export type HeaderMenuToggleProps = {
  isTextDark: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

export const HeaderMenuToggle: React.FC<HeaderMenuToggleProps> = (props) => {
  const { isTextDark, isOpen } = props;

  return (
    <button
      onClick={props.onToggle}
      sx={sxButton}
      aria-label={isOpen ? "Close Menu (Esc)" : "Open Menu"}
      title={isOpen ? "Close Menu (Esc)" : "Open Menu"}
    >
      {isOpen ? (
        <img src={isTextDark ? iCloseDark : iCloseLight} alt="Toggle Menu" />
      ) : (
        <img src={isTextDark ? iMenuDark : iMenuLight} alt="Toggle Menu" />
      )}
    </button>
  );
};
export default HeaderMenuToggle;

/**
 * Styles
 */
const sxButton: SystemStyleObject = {
  cursor: "pointer",
  height: "100%",
  display: "flex",
  alignItems: "center",
  border: "none",
  outline: "none",
  background: "none",
  appearance: "none",
  paddingX: [2, null, null, null, 3, null, null, 4, null, 5],
  "& img": {
    width: ["16", null, null, null, "24"],
  },
};
