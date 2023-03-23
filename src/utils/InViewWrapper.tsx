// component to animate when it is in view

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface IInViewProps {
  children: ReactNode;
  className?: string;
  inView?: {};
  notInView?: {};
  transition?: {};
  exit?: {};
  delay?: number;
  id?: string;
}

const InViewWrapper = ({
  children,
  inView,
  notInView,
  className,
  transition,
  delay,
}: IInViewProps) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      // animated si not animated le adaugam in props ca
      animate={isInView ? inView : notInView}
      transition={transition}
      onViewportEnter={() => {
        setTimeout(() => {
          setIsInView(true);
        }, delay);
      }}
      onViewportLeave={() => {
        setIsInView(false);
      }}
      id="view-wrapper"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;
