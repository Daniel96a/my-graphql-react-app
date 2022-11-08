import React, { FC } from "react";
import { Box, BoxProps } from "theme-ui";

interface ISelectListItem extends BoxProps {}

export const SelectListItem: FC<ISelectListItem> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Box
      role={"option"}
      as="li"
      css={{
        listStyle: "none",
        cursor: "pointer",
      }}
      sx={{
        position: "relative",
        padding: 2,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1,
        gap: 3,
        outline: "none",
        ":focus": {
          color: "primary",
        },
        width: "full",
        ":hover": {
          backgroundColor: "primary",
          color: "background",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
