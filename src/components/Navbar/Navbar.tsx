import { useMemo } from "react";
import {
  Link as RouterLink,
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Grid, NavLink } from "theme-ui";

const TabItem: React.FunctionComponent<
  { to: To; isActive?: boolean } & Pick<NavigateOptions, "state">
> = ({ to, state, isActive = false, children }) => {
  const navigate = useNavigate();
  return (
    <NavLink
      padding={[3, 4]}
      as={RouterLink}
      onClick={() => navigate(to, { state })}
      to={to}
      color={isActive ? "primary" : undefined}
      sx={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        position: "relative",
        top: [null, null, 0],
      }}
    >
      {children}
    </NavLink>
  );
};

const Navbar = (): JSX.Element => {
  const location = useLocation();

  const mainPath = useMemo(() => {
    switch (true) {
      case /employees/g.test(location.pathname):
        return "EMPLOYEES";
      case /about/g.test(location.pathname):
        return "ABOUT";
      default:
        return "OVERVIEW";
    }
  }, [location.pathname]);

  return (
    <Grid
      as={"nav"}
      paddingX={1}
      sx={{
        gridTemplateColumns: "1fr 1fr 1fr",
        borderTopLeftRadius: [4, 0, 0],
        borderTopRightRadius: [4, 0, 0],
        borderBottomRightRadius: [0, 4, 4],
        borderBottomLeftRadius: [0, 4, 4],
        gap: 0,
        width: "100%",
        boxShadow: [
          "0px 0px 2px 2px rgb(0 0 0 / 20%)",
          "0px 2px 2px 0px rgb(0 0 0 / 20%)",
        ],
        position: "relative",
      }}
    >
      <TabItem to={"/"} isActive={mainPath === "OVERVIEW"}>
        Overview
      </TabItem>
      <TabItem to={"employees"} isActive={mainPath === "EMPLOYEES"}>
        Employees
      </TabItem>
      <TabItem to={"about"} isActive={mainPath === "ABOUT"}>
        About
      </TabItem>
    </Grid>
  );
};

export default Navbar;
