/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

/**
 * Close the toggle menu by clicking anywhere outside of it.
 * https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/#close-the-menu-by-clicking-outside-of-it
 */
export const useOnClickOutsideToggleMenu: any = (
  ref: React.RefObject<React.ReactNode>,
  handler: (event: any) => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
