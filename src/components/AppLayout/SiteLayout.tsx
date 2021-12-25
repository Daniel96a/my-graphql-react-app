import { Box, Flex } from "theme-ui";

import MainContent from "../MainContent/MainContent";
import SiteHeader from "../SiteHeader";

interface ISiteLayout {}

const AppLayout: React.FunctionComponent<ISiteLayout> = ({ children }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Flex sx={{ flexDirection: "column", flex: 1 }}>
        <SiteHeader />
        <MainContent>{children}</MainContent>
      </Flex>
    </Box>
  );
};

export default AppLayout;
