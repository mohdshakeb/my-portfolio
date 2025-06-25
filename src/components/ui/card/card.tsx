"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined";
  isInteractive?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  isInteractive = false,
  ...props
}: CardProps) {
  // Variant styles
  const variantStyles = {
    default: "bg-white dark:bg-neutral-900",
    elevated: "bg-white dark:bg-neutral-900 shadow-md",
    outlined: "border border-neutral-200 dark:border-neutral-800",
  };

  // Interactive styles
  const interactiveStyles = isInteractive
    ? "cursor-pointer transition-all duration-200 hover:shadow-lg"
    : "";

  // Base styles
  const baseStyles = "rounded-lg p-6";

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...(isInteractive && {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      })}
      {...props}
    >
      {children}
    </motion.div>
  );
} 