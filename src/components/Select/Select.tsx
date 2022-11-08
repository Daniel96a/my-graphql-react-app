import React, {
  ChangeEventHandler,
  cloneElement,
  FunctionComponent,
  isValidElement,
  Key,
  KeyboardEventHandler,
  ReactElement,
  ReactNode,
  useId,
  useState,
} from "react";
import {
  Box,
  Flex,
  Input,
  InputProps,
  Label,
  Select as UISelect,
} from "theme-ui";

import { List, Option } from "./SelectList";
import { OptionCollection, TOptionElement } from "./SelectList/optionUtils";

interface ISelectProps extends InputProps {
  invalid?: boolean;
}

type Statics = {
  Option: typeof Option;
};

export const Select: FunctionComponent<ISelectProps> & Statics = ({
  sx,
  invalid,
  onChange,
  children,
  ...props
}) => {
  const selectId = `select-${useId()}`;
  const listId = `select-list-${useId()}`;
  const [expanded, setExpanded] = useState(false);
  const [highlightedKey, setHighlightedKey] = useState<Key | null>(null);
  const optionComponents = React.Children.toArray(children).filter((child) => {
    if (isValidElement(child)) {
      child.type === Option;
    }
    return child;
  });
  const options = new OptionCollection(optionComponents as TOptionElement[]);
  const [selectedKey, setSelectedKey] = useState<Key | null>(null);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Tab") {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log(e.key);

    switch (e.key) {
      case "ArrowDown": {
        if (!expanded) {
          updateExpandedState(true);
        }
        highlightOption(options.getNextEnabledKey(highlightedKey));
        break;
      }
      case "ArrowUp": {
        highlightOption(options.getPreviousEnabledKey(highlightedKey));
        break;
      }
      case "Escape": {
        if (expanded) {
          setExpanded(false);
        }
        break;
      }
      case " ":
      case "Enter": {
        if (expanded) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          handleOptionSelect(e, highlightedKey);
        } else {
          updateExpandedState(true);
          setHighlightedKey(selectedKey);
        }
        break;
      }
      case "Tab": {
        if (expanded) {
          setExpanded(false);
        }
        break;
      }
      default:
    }
    return false;
  };

  const handleOptionHover = (_e: MouseEvent, hoverOverKey: Key | null) => {
    highlightOption(hoverOverKey);
  };

  const handleOptionSelect = (e: MouseEvent, clickedKey: Key | null) => {
    selectOption(clickedKey);
  };

  const handleOptionWrapperRef = (el: HTMLLIElement) => {
    if (el) {
      if (el.getAttribute("tabindex") === "0") {
        el.focus();
      }
    }
  };

  console.log(options.findOptionByKey(selectedKey)?.props);

  const highlightOption = (highlightedKey: Key | null) => {
    const candidate = options.findOptionByKey(highlightedKey);
    if (candidate?.props.disabled) {
      return;
    }
    setHighlightedKey(highlightedKey);
  };

  const selectOption = (key: Key | null) => {
    updateExpandedState(false);
    setSelectedKey(key);
    setHighlightedKey(null);

    const selectedOption = options.findOptionByKey(key);
    const selectedValue = selectedOption?.props.value;
    if (onChange) {
      onChange(selectedValue);
    }
  };

  const updateExpandedState = (expanded: boolean) => {
    setExpanded(expanded);
    if (!expanded) {
      const select = document.getElementById(selectId);
      if (select) {
        select.focus();
      }
    }
  };

  return (
    <Flex sx={{ flexDirection: "column", gap: 2 }}>
      <Box
        variant="styles.forms.input"
        sx={{
          borderRadius: 10,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "text",
          outlineColor: "transparent",
          outlineStyle: "solid",
          ":focus-within": {
            borderColor: "primary",
          },
          ":has(input[aria-invalid=true])": {
            borderColor: "red",
          },
          ...sx,
        }}
        tabIndex={expanded ? -1 : 0}
        aria-haspopup={true}
        onClick={() => {
          setExpanded(!expanded);
        }}
        id={selectId}
      >
        <Input
          role="presentation"
          aria-expanded={expanded ? true : undefined} // ARIA recommends not including over false
          aria-controls={listId}
          value={options.findOptionByKey(selectedKey)?.props.value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          aria-invalid={invalid}
          aria-activedescendant={`list-item-${highlightedKey}`}
          sx={{
            border: "none",
            padding: 0,
            paddingY: 3,
            paddingX: 4,
            outline: "none",
            cursor: "pointer",
          }}
          {...props}
        />
      </Box>
      {expanded && (
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
          <List
            id={listId}
            role="menu"
            aria-hidden={expanded ? undefined : true}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            {options.allOptions().map((option) => {
              const isSelected = option.key === selectedKey;
              const isHighlighted = option.key === highlightedKey;
              return cloneElement(option, {
                key: `optionwrapper-${option.key}`,
                id: `list-item-${option.key}`,
                label: option.props.label,
                value: option.props.value,
                "data-option-highlighted": isHighlighted,
                disabled: option.props.disabled,
                tabIndex: isHighlighted ? 0 : -1,
                "aria-checked": isSelected ? true : undefined,
                "aria-disabled": option.props?.disabled ? true : undefined,
                onOptionWrapperRef: handleOptionWrapperRef,
                onMouseOver: (e: MouseEvent) =>
                  handleOptionHover(e, option.key),
                onClick: (e: MouseEvent) => handleOptionSelect(e, option.key),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                onKeyDown: (e: KeyboardEvent) => handleKeyDown(e),
              });
            })}
          </List>
        </Box>
      )}
    </Flex>
  );
};

Select.Option = Option;
