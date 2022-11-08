import { FC, useState } from "react";
import { PopperProps, usePopper } from "react-popper";
import { Box, BoxProps } from "theme-ui";

interface IPopper<M = unknown>
  extends BoxProps,
    Pick<PopperProps<M>, "modifiers" | "placement"> {
  refEl: HTMLButtonElement | null;
}

export const Popper: FC<IPopper> = ({
  children,
  refEl,
  style,
  placement,
  ...props
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );
  const { styles, attributes } = usePopper(refEl, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [10, 0],
        },
      },
    ],
    placement: placement,
  });
  return (
    <Box
      tabIndex={0}
      style={{ ...styles.popper, ...style }}
      ref={setPopperElement}
      {...props}
      {...attributes.popper}
    >
      {children}
    </Box>
  );
};
