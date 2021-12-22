import { Box, Container } from "theme-ui";

export const SiteMainContent: React.FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        overflow: "auto",
      }}
    >
      <Container
        paddingX={[2, 3, 3]}
        paddingY={[3, 3, 4]}
        sx={{ maxWidth: 832 }}
      >
        {children}
      </Container>
    </Box>
  );
};
