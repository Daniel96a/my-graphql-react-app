import { motion } from "framer-motion";
import React from "react";

interface IPageLayout {}

const PageLayout = React.forwardRef<HTMLDivElement, IPageLayout>(
  ({ children }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        exit={{
          opacity: 0,
        }}
      >
        {children}
      </motion.div>
    );
  },
);

PageLayout.displayName = "PageLayout";

export default PageLayout;
