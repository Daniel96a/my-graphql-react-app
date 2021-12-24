import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Container, Flex, Heading } from "theme-ui";

import { useDeviceContext } from "../../../hooks/useDeviceContext";

export const SiteHeader = (): JSX.Element => {
  const { isMobile } = useDeviceContext();

  const { pathname } = useLocation();

  const heading = useMemo(() => {
    switch (pathname) {
      case "/employees":
        return "Employees";
      case "/about":
        return "About";
      case "/":
      default:
        return "Overview";
    }
  }, [pathname]);
  return (
    <Flex
      backgroundColor={"grayScale.900"}
      color={"grayScale.50"}
      sx={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
        position: "relative",
      }}
    >
      <Container
        sx={{
          paddingX: [2, 3],
          maxWidth: 1260,
          display: "flex",
          alignItems: "center",
          justifyContent: ["center", null, "normal"],
        }}
      >
        {isMobile ? (
          <Heading>{heading}</Heading>
        ) : (
          <>
            <Heading sx={{ flexShrink: 0 }}>My company</Heading>

            <Flex
              sx={{
                justifyContent: "flex-end",
                width: "100%",
                gap: 4,
              }}
            >
              <Box>
                <Button>Switch company</Button>
              </Box>
              <Box>
                <Button>Logout</Button>
              </Box>
            </Flex>
          </>
        )}
      </Container>
    </Flex>
  );
};
