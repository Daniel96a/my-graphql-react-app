import { alpha } from "@theme-ui/color";
import { Box, Container, Flex, Heading } from "theme-ui";

import { Navbar } from "../../components";
import { useDeviceContext } from "../../hooks/useDeviceContext";

export const SiteHeader = (): JSX.Element => {
  const { isMobile } = useDeviceContext();

  return (
    <>
      <Box
        as={"header"}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 3,
          backgroundColor: (t) => alpha("background", 0.85)(t),
          backdropFilter: "blur(16px)",
        }}
      >
        <Flex padding={2}>
          <Container
            padding={[3, 4]}
            sx={{
              paddingX: [3, 4],
              maxWidth: 1260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading color={"primary"} as={"h1"}>
              {"My todos"}
            </Heading>
          </Container>
        </Flex>
        {!isMobile && <Navbar />}
      </Box>
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: "0px",
            left: 0,
            right: 0,
            zIndex: 3,
            backgroundColor: (t) => alpha("background", 0.85)(t),
            backdropFilter: "blur(16px)",
          }}
        >
          <Navbar />
        </Box>
      )}
    </>
  );
};
