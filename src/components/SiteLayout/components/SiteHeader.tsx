import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Container, Flex, Heading } from "theme-ui";

export const SiteHeader = (): JSX.Element => {
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
      sx={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
      }}
    >
      <Container
        sx={{
          paddingX: [2, null, 3],
          maxWidth: 1260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Heading>{heading}</Heading>
      </Container>
    </Flex>
  );
};
