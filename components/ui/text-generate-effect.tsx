"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
};

export function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
  const pieces = words.split(" ");

  return (
    <h1 className={cn("text-balance", className)}>
      {pieces.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.35, delay: index * 0.045 }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
