import { forwardRef } from "react";
import { Card as UICard, CardProps } from "theme-ui";

interface ICard extends CardProps {}

const Card = forwardRef<HTMLDivElement, ICard>(
  ({ children, ...props }, ref) => {
    return (
      <UICard ref={ref} {...props}>
        {children}
      </UICard>
    );
  },
);

Card.displayName = "Card";

export default Card;