"use client";

import { type PointerEvent, type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CompareProps = {
  first: ReactNode;
  second: ReactNode;
  className?: string;
};

export function Compare({ first, second, className }: CompareProps) {
  const [position, setPosition] = useState(50);
  const previewRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    if (!previewRef.current) {
      return;
    }

    const rect = previewRef.current.getBoundingClientRect();
    const nextValue = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, nextValue));

    setPosition(clamped);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateFromClientX(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons === 0) {
      return;
    }

    updateFromClientX(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f1425]", className)}>
      <div
        ref={previewRef}
        className="relative aspect-[4/3] w-full touch-none select-none md:aspect-[16/9]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="absolute inset-0">{first}</div>
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {second}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/70"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-0 top-1/2 z-20 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 text-center text-xs font-bold leading-10 text-slate-900 shadow"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          ||
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/60 px-4 py-4">
        <input
          aria-label="Compare before and after"
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-white/30"
        />
      </div>
    </div>
  );
}
