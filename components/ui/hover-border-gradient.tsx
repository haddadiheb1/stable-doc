"use client";

import { motion } from "framer-motion";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type AnchorProps = {
  as: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  as?: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type HoverBorderGradientProps = BaseProps & (AnchorProps | ButtonProps);

export function HoverBorderGradient({
  children,
  className,
  as: Comp = "button",
  ...props
}: HoverBorderGradientProps) {
  if (Comp === "a") {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={cn("group relative inline-flex rounded-full p-[1px]", className)} {...anchorProps}>
        <motion.span
          className="absolute inset-0 rounded-full bg-[linear-gradient(95deg,#ff6a3d,#ff9352,#ffe082,#ff6a3d)]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "220% 220%" }}
          aria-hidden="true"
        />
        <span className="relative inline-flex items-center justify-center rounded-full bg-[#101321] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-200 group-hover:scale-[1.02]">
          {children}
        </span>
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={cn("group relative inline-flex rounded-full p-[1px]", className)} {...buttonProps}>
      <motion.span
        className="absolute inset-0 rounded-full bg-[linear-gradient(95deg,#ff6a3d,#ff9352,#ffe082,#ff6a3d)]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "220% 220%" }}
        aria-hidden="true"
      />
      <span className="relative inline-flex items-center justify-center rounded-full bg-[#101321] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-200 group-hover:scale-[1.02]">
        {children}
      </span>
    </button>
  );
}
