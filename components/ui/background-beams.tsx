"use client";

import { motion } from "framer-motion";

type BackgroundBeamsProps = {
  className?: string;
};

const beams = [
  { left: "8%", delay: 0, duration: 8 },
  { left: "23%", delay: 1.2, duration: 10 },
  { left: "41%", delay: 0.8, duration: 9 },
  { left: "58%", delay: 1.7, duration: 11 },
  { left: "74%", delay: 0.4, duration: 8.5 },
  { left: "90%", delay: 2, duration: 10.5 },
];

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.left}
          className="absolute top-[-25%] h-[150%] w-px bg-gradient-to-b from-transparent via-[#ff6a3d66] to-transparent"
          style={{ left: beam.left }}
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: [0, 0.85, 0], y: [0, 280, 560] }}
          transition={{
            repeat: Infinity,
            duration: beam.duration,
            delay: beam.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
