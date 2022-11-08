import React, { FC, ReactNode, useId } from "react";
import { createPortal } from "react-dom";

export const Portal: FC<{ children: ReactNode; element?: Element }> = ({
  children,
  element = document.body,
}) => {
  const portalId = useId();

  return (
    <React.Fragment>{createPortal(children, element, portalId)}</React.Fragment>
  );
};
