import { Grid } from "theme-ui";

import { SiteHeader } from "./components/SiteHeader";
import { SiteMainContent } from "./components/SiteMainContent";
import { SiteTabBar } from "./components/SitetTabBar";

interface ISiteLayout {}

const SiteLayout: React.FunctionComponent<ISiteLayout> = ({ children }) => {
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        gap: 0,
        gridTemplateRows: ["3rem auto 3rem", "4rem auto 0"],
        height: "100%",
      }}
    >
      <SiteHeader />
      <SiteMainContent>{children}</SiteMainContent>
      <SiteTabBar />
    </Grid>
  );
};

export default SiteLayout;
