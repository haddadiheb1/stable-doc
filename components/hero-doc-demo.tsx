"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroPrompts = [
  "Create a 2-page client proposal with timeline table and executive summary.",
  "Insert a methodology section and enforce consistent heading levels.",
  "Lock pagination and format all tables for export-ready delivery.",
];

export function HeroDocDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const states = useMemo(
    () => [
      {
        title: "Blank document",
        line: "Waiting for your instruction...",
        rows: ["No sections yet.", "No style rules applied.", "No pagination plan."],
      },
      {
        title: "Prompt received",
        line: heroPrompts[step],
        rows: [
          "Outline: Executive Summary, Scope, Timeline",
          "Tone: Professional and concise",
          "Length: 2 pages maximum",
        ],
      },
      {
        title: "Formatted output",
        line: "Document generated with stable spacing and locked pagination.",
        rows: [
          "Executive Summary (102 words)",
          "Scope and Deliverables section",
          "Timeline table with Q1-Q4 milestones",
        ],
      },
    ],
    [step],
  );

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c1120] p-5 shadow-[0_25px_90px_-40px_rgba(17,24,39,.85)]">
      <div className="mb-4 flex items-center gap-2 text-xs text-slate-300">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2">Live document engine</span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        <div className="mb-4 rounded-xl border border-white/10 bg-[#121a30] p-3 text-xs text-slate-200">
          <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#ffb199]">Prompt</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={heroPrompts[step]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="leading-relaxed"
            >
              {heroPrompts[step]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="rounded-xl border border-white/10 bg-white p-4 text-slate-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={states[step].title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-sm font-semibold text-slate-900">{states[step].title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{states[step].line}</p>
              <div className="mt-3 space-y-2">
                {states[step].rows.map((row, idx) => (
                  <motion.div
                    key={`${states[step].title}-${row}`}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-700"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.06 }}
                  >
                    {row}
                  </motion.div>
                ))}
              </div>

              {step === 2 && (
                <div className="mt-3 rounded-md border border-slate-200 bg-white px-2 py-2 text-[11px]">
                  <div className="mb-1 grid grid-cols-[1.2fr_1fr_1fr] gap-2 font-semibold text-slate-700">
                    <span>Milestone</span>
                    <span>Owner</span>
                    <span>Due</span>
                  </div>
                  <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 text-slate-600">
                    <span>Discovery</span>
                    <span>Alex</span>
                    <span>Apr 12</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-600">
                  Parsing prompt constraints before generation...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
        <span className="rounded-lg border border-emerald-300/40 bg-emerald-400/10 px-2 py-1 text-center">Headings applied</span>
        <span className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-2 py-1 text-center">Spacing normalized</span>
        <span className="rounded-lg border border-fuchsia-300/40 bg-fuchsia-400/10 px-2 py-1 text-center">Pagination locked</span>
      </div>
    </div>
  );
}
