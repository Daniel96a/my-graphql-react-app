import { alpha } from "@theme-ui/color";
import { Box, Container } from "theme-ui";

const MainContent: React.FunctionComponent = ({ children }) => {
  return (
    <Box
      as={"main"}
      style={{
        overflow: "auto",
        position: "relative",
        zIndex: 0,
      }}
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
export default MainContent;
