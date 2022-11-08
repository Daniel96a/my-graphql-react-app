import React, { Children, cloneElement, FC, isValidElement } from "react";
import { Box, BoxProps } from "theme-ui";

import { SelectListItem } from "./SelectListItem";

interface ISelectList extends BoxProps {
  onClose(): void;
}

type Statics = {
  Item: typeof SelectListItem;
};

export const SelectList: FC<ISelectList> & Statics = ({
  children,
  onClose,
}) => {
  return (
    <Box
      sx={{
        background: "background",
        border: "1px solid",
        borderColor: "primary",
        borderRadius: 10,
        maxHeight: "40vh",
        overflowY: "auto",
      }}
    >
      <Box
        as={"ul"}
        role={"listbox"}
        padding={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 6,
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: 300,
        }}
      >
        {Children.toArray(children).map((element) => {
          if (isValidElement(element)) {
            return cloneElement(element, {
              tabIndex: 0,
              onKeyDown: (e) => {
                e.stopPropagation();
                e.preventDefault();

                const target = e.target as HTMLLIElement;
                switch (e.key) {
                  case "ArrowDown":
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLLIElement).focus({
                        preventScroll: true,
                      });
                    }
                    break;
                  case "ArrowUp":
                    if (target.previousElementSibling) {
                      (target.previousElementSibling as HTMLLIElement).focus({
                        preventScroll: true,
                      });
                    }
                    break;
                  case "Escape":
                    if (e.key === "Escape") {
                      onClose();
                    }
                    break;
                  case " ":
                    if (element.props.onClick) {
                      element.props.onClick();
                    }
                    break;
                  default:
                    break;
                }
              },
              onFocus: (e) => {
                const target = e.target;
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              },
            } as BoxProps);
          } else {
            return null;
          }
        })}
      </Box>
    </Box>
  );
};

SelectList.Item = SelectListItem;
