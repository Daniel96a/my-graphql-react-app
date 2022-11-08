import { AnimatePresence, motion } from "framer-motion";
import React, { EventHandler, FC, useEffect } from "react";
import ReactFocusLock from "react-focus-lock";
import { BiPencil, BiTrash } from "react-icons/bi";

import { Popper, SelectList } from "../../../components";
import { Portal } from "../../../components/Portal";

interface ITodoMenu {
  isOpen: boolean;
  onOutsideClick?(): void;
  onClose(): void;
  handleDeleteTodo(): void;
  handleEditTodo(): void;
  referenceElement: HTMLButtonElement | null;
}

export const TodoMenu: FC<ITodoMenu> = ({
  isOpen,
  onClose,
  onOutsideClick = onClose,
  handleDeleteTodo,
  handleEditTodo,
  referenceElement,
}) => {
  const ref = useOutsideClick(onOutsideClick, isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <Popper refEl={referenceElement} placement={"bottom-end"}>
            <motion.div
              ref={ref}
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0.3,
              }}
              style={{ transformOrigin: "top right" }}
            >
              <ReactFocusLock returnFocus>
                <SelectList onClose={onClose}>
                  <SelectList.Item onClick={handleDeleteTodo}>
                    Ta bort
                    <BiTrash />
                  </SelectList.Item>
                  <SelectList.Item onClick={handleEditTodo}>
                    Ändra
                    <BiPencil />
                  </SelectList.Item>
                </SelectList>
              </ReactFocusLock>
            </motion.div>
          </Popper>
        </Portal>
      )}
    </AnimatePresence>
  );
};
const useOutsideClick = (callback: () => void, isActive: boolean) => {
  const ref = React.useRef<any>();

  useEffect(() => {
    const handleClick: EventHandler<any> = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isActive) {
        callback();
        event.stopPropagation();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, isActive]);

  return ref;
};
