import { motion, MotionProps } from "framer-motion";
import { FC, ReactNode } from "react";

interface ITodoListItemAnimation extends MotionProps {
  children?: ReactNode;
}

export const TodoListItemAnimation: FC<ITodoListItemAnimation> = ({
  children,
}) => {
  return (
    <motion.li
      animate={{ x: 0, opacity: 1 }}
      initial={{
        x: "-10%",
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <motion.div
        animate={{ height: "auto" }}
        exit={{
          height: 0,
        }}
        initial={{
          height: 0,
        }}
      >
        {children}
      </motion.div>
    </motion.li>
  );
};
