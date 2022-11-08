import React, { FunctionComponent } from "react";
import { Box, BoxProps } from "theme-ui";

interface IOptionProps extends BoxProps {
  value: string;
}

export const Option: FunctionComponent<IOptionProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Box
      as={"li"}
      role={"menuitemcheckbox"}
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
        "&[data-option-highlighted=true]": {
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
