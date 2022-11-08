import React, { forwardRef } from "react";
import { Box, BoxProps } from "theme-ui";

interface IOverlay extends BoxProps {
  isOpen: boolean;
}

export const Overlay = forwardRef<HTMLElement, IOverlay>(
  ({ sx, isOpen, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          position: "fixed",
          inset: 0,
          padding: 3,
          pointerEvents: isOpen ? null : "none",
          ...sx,
        }}
        {...props}
      />
    );
  },
);

Overlay.displayName = "Overlay";
