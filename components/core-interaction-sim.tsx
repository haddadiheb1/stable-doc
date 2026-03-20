"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const interactions = [
  {
    prompt: "Add a budget comparison table under Section 3 with quarterly totals.",
    action: "Inserted a 4-column budget table and aligned numeric values.",
    heading: "Section 3: Budget Overview",
    detail: "Q1-Q4 totals computed and formatted.",
    excerpt: [
      "Current spend: $42,000 | Proposed spend: $36,500",
      "Primary savings source: vendor consolidation",
      "Projected yearly savings: $22,000",
    ],
    statLabel: "Savings confidence",
    statValue: "92%",
  },
  {
    prompt: "Rewrite the introduction in formal academic tone and keep it under 120 words.",
    action: "Rewrote introduction and preserved heading hierarchy.",
    heading: "Introduction",
    detail: "Word count constrained. Tone standardized.",
    excerpt: [
      "This proposal outlines a phased modernization roadmap.",
      "The objective is to reduce document turnaround time while maintaining quality.",
      "All deliverables follow standardized formatting and review gates.",
    ],
    statLabel: "Word count",
    statValue: "118",
  },
  {
    prompt: "Insert a one-page executive summary before the main body.",
    action: "Created executive summary and recalculated page breaks.",
    heading: "Executive Summary",
    detail: "Pagination updated with consistent margins.",
    excerpt: [
      "Scope: 3 workstreams across operations, delivery, and QA.",
      "Timeline: kickoff in April, pilot in June, scale in August.",
      "Target outcome: 35% faster turnaround within one quarter.",
    ],
    statLabel: "Readiness",
    statValue: "Approved",
  },
];

export function CoreInteractionSim() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % interactions.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = interactions[index];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-3xl border border-white/10 bg-[#0f1528] p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#ffaf8b]">Prompt interface</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.prompt}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="mt-3 space-y-3"
          >
            <div className="rounded-2xl border border-white/15 bg-[#131d36] px-4 py-3 text-sm leading-relaxed text-slate-100">
              {current.prompt}
            </div>
            <div className="rounded-2xl border border-emerald-300/35 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
              Agent action: {current.action}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-white/20 px-3 py-1 text-slate-300">No manual styling</span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-slate-300">Deterministic layout</span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-slate-300">Instant update</span>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-800">
        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Live document preview</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.heading}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.26 }}
            className="mt-3"
          >
            <h4 className="text-lg font-semibold">{current.heading}</h4>
            <p className="mt-1 text-sm text-slate-600">{current.detail}</p>
            <div className="mt-4 space-y-2">
              {current.excerpt.map((line) => (
                <p
                  key={`${current.heading}-${line}`}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[12px] leading-relaxed text-slate-700"
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-slate-200 p-3">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                <span>{current.statLabel}</span>
                <span>{current.statValue}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  className="h-full bg-[#ff6a3d]"
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
