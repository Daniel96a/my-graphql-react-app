import { alpha } from "@theme-ui/color";
import { FC } from "react";
import { Box, BoxProps, Container } from "theme-ui";

interface IMainContent extends BoxProps {}

export const MainContent: FC<IMainContent> = ({ children, ...props }) => {
  return (
    <Box
      as={"main"}
      css={{
        overflow: "auto",
        position: "relative",
        zIndex: 0,
      }}
      {...props}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: (t) => alpha("background", 0.85)(t),
        }}
      />
      <Box
        sx={{
          backdropFilter: "blur(16px)",
        }}
      >
        <Container paddingX={3} paddingTop={4} paddingBottom={6}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
