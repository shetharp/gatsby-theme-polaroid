/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

/**
 * Listens for clicks outside of the ref component/element.
 *
 * Useful for closing the toggle menu when clicking anywhere outside of the header.
 * https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/#close-the-menu-by-clicking-outside-of-it
 */
export const useOnClickOutside: any = (ref: React.RefObject<React.ReactNode>, handler: (event: any) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
      // @ts-ignore
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
