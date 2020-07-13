/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/**
 * Detect when a user presses the target key and run the provided callback function
 *
 * Example usage:
 *
 * ```
 * import { useCallback } from "react"
 *
 * const onEscKey = useCallback((event) => {
 *   console.log("Escape key pressed!")
 * }, []);
 *
 * const onDarkModeKeyboardShortcut = useCallback((event) => {
 *   console.log("Toggling dark mode!")
 * }, []);
 *
 *
 * useKeyPressCallback("Escape", onEscKey)
 * useKeyPressCallback("d", onDarkModeKeyboardShortcut)
 * ```
 */
export const useKeyPressCallback = (
  targetKey: KeyboardEvent["key"],
  callback: (event: KeyboardEvent) => void
): void => {
  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      callback(event);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);
};

/**
 * Detect when a user presses the target key.
 * Maintain the state of all target keys we are listening for.
 * Return true/false if the key is being pressed.
 *
 * Example usage:
 * When user presses the "h" key: `useKeyPress("h")`
 * When user presses the escape key: `useKeyPress("Escape")`
 *
 * https://usehooks.com/useKeyPress/
 *
 * @param targetKey string
 */
export function useKeyPress(targetKey: React.KeyboardEvent["key"]): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }: { key: React.KeyboardEvent["key"] }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }: { key: React.KeyboardEvent["key"] }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
