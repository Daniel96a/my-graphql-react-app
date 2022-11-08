import { Key, ReactElement } from "react";

import { Option } from "./Option";

export type TOptionElement = ReactElement<any, typeof Option>;
export class OptionCollection {
  options: TOptionElement[];
  constructor(options: TOptionElement[]) {
    this.options = options;
  }

  allOptions() {
    return this.options;
  }

  findOptionByValue(value: string) {
    return this.options.find((option) => option?.props.value === value);
  }

  findOptionByKey(key: Key | null) {
    return this.options.find((option) => option.key === key);
  }

  getNextEnabledKey(key: Key | null): Key | null {
    const currentIndex = this.options.findIndex((option) => option.key === key);
    const lastIndex = this.options.length - 1;
    let next;
    if (currentIndex === -1) {
      next = this.options[0];
    } else if (currentIndex === lastIndex) {
      next = this.options[currentIndex];
    } else {
      next = this.options[currentIndex + 1];
    }

    if (next.props.disabled && currentIndex !== lastIndex) {
      return this.getNextEnabledKey(next.key);
    }
    return next.key;
  }

  getPreviousEnabledKey(key: Key | null): Key | null {
    const currentIndex = this.options.findIndex((option) => option.key === key);
    let previous;
    if (currentIndex === 0) {
      previous = this.options[0];
    } else {
      previous = this.options[currentIndex - 1];
    }

    if (currentIndex !== 0 && previous.props.disabled) {
      return this.getPreviousEnabledKey(previous.key);
    }
    return previous.key;
  }
}
