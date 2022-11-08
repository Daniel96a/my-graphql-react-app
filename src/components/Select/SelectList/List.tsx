import React, { FunctionComponent } from "react";
import { Box, BoxProps } from "theme-ui";

interface IListProps extends BoxProps {}
export const List: FunctionComponent<IListProps> = ({ children, ...props }) => {
  return (
    <Box
      as={"ul"}
      role={"menu"}
      padding={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: 300,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
