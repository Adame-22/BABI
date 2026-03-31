"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        type: "spring", 
        stiffness: 70, 
        damping: 15, 
        mass: 1,
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 18, 
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
