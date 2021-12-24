import { NavigateOptions, To, useNavigate } from "react-router-dom";
import { Box, Grid } from "theme-ui";

const TabItem: React.FunctionComponent<
  { to: To; isSelected?: boolean } & Pick<NavigateOptions, "state">
> = ({ to, state, isSelected = false, children }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(to, { state })}
      sx={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        width: "100%",
        color: isSelected ? "blue" : null,
      }}
    >
      {children}
    </Box>
  );
};

export const SiteTabBar = (): JSX.Element => {
  return (
    <Grid
      paddingX={1}
      sx={{
        gridTemplateColumns: "1fr 1fr 1fr",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,

        gap: 0,
        width: "100%",
        boxShadow: "2px 0 4px 2px rgba(0,0,0,.2)",
      }}
    >
      <TabItem to={"/"}>Overview</TabItem>
      <TabItem to={"employees"}>Employees</TabItem>
      <TabItem to={"about"}>About</TabItem>
    </Grid>
  );
};
