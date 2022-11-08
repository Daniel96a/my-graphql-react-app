import { BoxProps, Flex } from "theme-ui";

import { MainContent, SiteHeader } from "../../components";

interface IAppLayout extends BoxProps {}

export const AppLayout: React.FunctionComponent<IAppLayout> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Flex sx={{ flexDirection: "column", flexGrow: 1, ...sx }} {...props}>
      <SiteHeader />
      <MainContent>{children}</MainContent>
    </Flex>
  );
};
