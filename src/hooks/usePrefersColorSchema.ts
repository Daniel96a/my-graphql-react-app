import { useEffect, useState } from "react";

export const usePrefersColorSchema = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    const switchMode = (e: MediaQueryListEvent) => {
      const isDarkMode = e.matches;
      isDarkMode ? setMode("dark") : setMode("light");
    };
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    darkModeMediaQuery.addListener(switchMode);
  }, [setMode]);
  return mode;
};
