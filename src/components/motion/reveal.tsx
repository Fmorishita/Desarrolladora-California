"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** índice para stagger */
  index?: number;
  as?: "div" | "li" | "section" | "article" | "span";
}

/** Reveal on-scroll sutil. Respeta prefers-reduced-motion vía Framer. */
export function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  );
}
