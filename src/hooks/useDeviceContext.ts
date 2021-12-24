import { useEffect, useState } from "react";

interface IUseDeviceContext {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
}
export const useDeviceContext = (): IUseDeviceContext => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isLargeDesktop: false,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setBreakpoints({
        isMobile: window.innerWidth < 480,
        isTablet: window.innerWidth >= 480 && window.innerWidth < 768,
        isLaptop: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024 && window.innerWidth <= 1200,
        isLargeDesktop: window.innerWidth > 1200,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return breakpoints;
};
