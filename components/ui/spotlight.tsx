"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className, fill = "#ff6a3d" }: SpotlightProps) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl", className)}
      style={{
        background: `radial-gradient(circle at center, ${fill}55 0%, ${fill}1a 35%, transparent 70%)`,
      }}
      initial={{ opacity: 0.2, scale: 0.9 }}
      animate={{ opacity: [0.24, 0.45, 0.24], scale: [0.95, 1, 0.95] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}
