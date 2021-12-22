import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { NavLink as UINavLink } from "theme-ui";
import { NavLinkProps } from "theme-ui";

interface IRouterLink extends LinkProps, NavLinkProps {}

const RRDLink = ({ ...props }: LinkProps) => <Link {...props} />;

// eslint-disable-next-line react/display-name
export const RouterLink = forwardRef<HTMLAnchorElement, IRouterLink>(
  ({ children, ...props }, ref) => (
    <UINavLink as={RRDLink} {...props} ref={ref}>
      {children}
    </UINavLink>
  ),
);

export default RouterLink;
