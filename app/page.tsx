import { CoreInteractionSim } from "@/components/core-interaction-sim";
import { HeroDocDemo } from "@/components/hero-doc-demo";
import { Compare } from "@/components/ui/compare";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function MessyDocument() {
  return (
    <div className="h-full w-full bg-[#f7f1ea] p-4 text-[#3f2a22]">
      <p className="mb-2 inline-flex rounded-full border border-[#d8b2a2] bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7a3f2b] shadow-sm">
        Traditional editing
      </p>
      <div className="rounded-lg border border-[#e7c8bb] bg-white p-3 shadow-[0_16px_30px_-26px_rgba(120,50,20,.9)]">
        <h4 className="mb-2 text-sm font-semibold">Project Proposal</h4>
        <div className="space-y-1 text-[11px] leading-relaxed">
          <p className="font-semibold">Executive summary</p>
          <p>Client needs faster proposal turnaround without sacrificing quality.</p>
          <p className="font-mono text-[10px]">timeline : week1 research | week2 draft | week3 review</p>
        </div>
        <div className="mt-3 rounded-md border border-[#e7c8bb] bg-[#fff9f6] px-2 py-2 text-[10px]">
          <div className="mb-1 grid grid-cols-[1.2fr_1fr_1fr] gap-2 text-[#855444]">
            <span>Task</span>
            <span className="text-right">Cost</span>
            <span className="text-right">Due</span>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 text-[#7d4f3f]">
            <span>Discovery</span>
            <span className="text-right">$12,000</span>
            <span className="text-right">Apr 12</span>
          </div>
        </div>
        <div className="mt-3 rounded-md border border-dashed border-rose-400 bg-rose-50 p-2 text-[11px] text-rose-700">
          Table shifted to next page. Spacing mismatch detected.
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1 text-[10px]">
          <span className="rounded bg-rose-100 px-2 py-1 text-center text-rose-700">Spacing broke</span>
          <span className="rounded bg-amber-100 px-2 py-1 text-center text-amber-700">Page break ruined</span>
          <span className="rounded bg-rose-100 px-2 py-1 text-center text-rose-700">Fonts inconsistent</span>
        </div>
      </div>
    </div>
  );
}

function CleanDocument() {
  return (
    <div className="h-full w-full bg-[#f0f8f6] p-4 text-[#17322d]">
      <p className="mb-2 inline-flex rounded-full border border-emerald-300 bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900 shadow-sm">
        Prompt-directed document
      </p>
      <div className="rounded-lg border border-emerald-200 bg-white p-3 shadow-[0_16px_30px_-26px_rgba(18,74,62,.9)]">
        <h4 className="mb-2 text-sm font-semibold">Project Proposal</h4>
        <div className="space-y-1 text-[11px] leading-relaxed">
          <p className="font-semibold">Executive Summary</p>
          <p>Objective: reduce proposal delivery time by 35% this quarter.</p>
          <p>Scope includes workflow automation, review rules, and QA checks.</p>
        </div>
        <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50/60 px-2 py-2 text-[10px]">
          <div className="mb-1 grid grid-cols-[1.2fr_1fr_1fr] gap-2 font-semibold text-emerald-900">
            <span>Milestone</span>
            <span className="text-right">Owner</span>
            <span className="text-right">Due</span>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 text-emerald-800">
            <span>Pilot Launch</span>
            <span className="text-right">Maya</span>
            <span className="text-right">May 04</span>
          </div>
        </div>
        <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-2 text-[11px] text-emerald-800">
          Timeline table aligned. Pagination locked for all exports.
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1 text-[10px]">
          <span className="rounded bg-emerald-100 px-2 py-1 text-center text-emerald-800">Layout locked</span>
          <span className="rounded bg-cyan-100 px-2 py-1 text-center text-cyan-800">Spacing consistent</span>
          <span className="rounded bg-emerald-100 px-2 py-1 text-center text-emerald-800">Share-ready</span>
        </div>
      </div>
    </div>
  );
}

const deviceSnippets = [
  {
    device: "Laptop",
    hash: 821,
    lines: [
      "Executive Summary: 35% faster turnaround target.",
      "Timeline: Kickoff Apr 10, Pilot Jun 01, Rollout Aug 15.",
      "Budget variance: -12% from current baseline.",
    ],
  },
  {
    device: "Tablet",
    hash: 822,
    lines: [
      "Executive Summary: 35% faster turnaround target.",
      "Timeline: Kickoff Apr 10, Pilot Jun 01, Rollout Aug 15.",
      "Budget variance: -12% from current baseline.",
    ],
  },
  {
    device: "Phone",
    hash: 823,
    lines: [
      "Executive Summary: 35% faster turnaround target.",
      "Timeline: Kickoff Apr 10, Pilot Jun 01, Rollout Aug 15.",
      "Budget variance: -12% from current baseline.",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1020_0%,#0c1224_32%,#f7f6f2_32.1%,#f7f6f2_100%)] text-slate-100">
      <Spotlight className="top-[-10rem]" fill="#ff6a3d" />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <TextGenerateEffect
              words="Direct your document. Don't wrestle with formatting."
              className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-white md:text-6xl"
            />

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Describe what you need. The AI agent builds a perfectly formatted document instantly.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HoverBorderGradient as="a" href="#final-cta">
                Generate My First Document
              </HoverBorderGradient>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Used by people who are done fixing spacing, fonts, and page breaks.
            </p>
          </div>

          <HeroDocDemo />
        </div>
      </section>

      <section className="relative z-10 bg-[#f7f6f2] py-20 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Same content. Very different outcome.</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            One workflow creates chaos. The other creates clean, deterministic documents.
          </p>
          <div className="mt-8">
            <Compare first={<MessyDocument />} second={<CleanDocument />} className="min-h-[20rem]" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] py-16 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">From instruction to finished doc in 3 steps</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "1. Prompt",
                title: "Tell the agent what to build",
                text: "Define sections, tone, and structure in plain language.",
                preview: [
                  "Create a 2-page proposal with Executive Summary.",
                  "Include timeline table and risk section.",
                ],
              },
              {
                step: "2. Generate",
                title: "AI applies layout rules",
                text: "Headings, tables, spacing, and pagination are enforced automatically.",
                preview: [
                  "Applied: Heading hierarchy (H1-H3).",
                  "Applied: Table style + locked page breaks.",
                ],
              },
              {
                step: "3. Done",
                title: "Share a polished document",
                text: "Export or send immediately with confidence.",
                preview: [
                  "Status: Ready for client review.",
                  "Pages: 2 | Version: v1.0 | Format: PDF",
                ],
              },
            ].map((item) => (
              <article key={item.step} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_40px_-36px_rgba(15,23,42,.9)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6a3d]">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="space-y-2 text-[11px] leading-relaxed text-slate-700">
                    {item.preview.map((line) => (
                      <p key={`${item.step}-${line}`} className="rounded-md border border-slate-200 bg-white px-2 py-1">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="core-interaction" className="bg-[#f7f6f2] py-16 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">You instruct. The agent executes. The document updates instantly.</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            This is the product loop: prompt in, structured action, instant document output.
          </p>
          <div className="mt-8">
            <CoreInteractionSim />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] py-16 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for directing documents, not manually fixing them</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_50px_-42px_rgba(15,23,42,.9)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                <tr>
                  <th className="px-4 py-3">Criteria</th>
                  <th className="px-4 py-3 text-[#0c725e]">This product</th>
                  <th className="px-4 py-3 text-[#8b4b34]">Traditional tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Workflow", "Prompt-driven execution", "Manual editing"],
                  ["Formatting effort", "None", "Constant cleanup"],
                  ["Layout consistency", "Deterministic", "Easily breaks"],
                  ["Pagination", "Stable by default", "Shifts while editing"],
                  ["Cross-device rendering", "Identical output", "Can vary by device"],
                  ["Time to final draft", "Minutes", "Hours"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200">
                    <td className="px-4 py-4 font-medium">{row[0]}</td>
                    <td className="px-4 py-4 text-emerald-700">{row[1]}</td>
                    <td className="px-4 py-4 text-rose-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-slate-600">Your content should be the hard part. Formatting should not.</p>
        </div>
      </section>

      <section className="bg-[#f7f6f2] py-16 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What you see is what everyone sees</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            The same document renders identically across laptop, tablet, and phone.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {deviceSnippets.map((item) => (
              <article key={item.device} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_22px_40px_-36px_rgba(17,24,39,.9)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.device}</p>
                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <h4 className="text-sm font-semibold text-slate-800">Q2 Client Proposal</h4>
                  <div className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-700">
                    {item.lines.map((line) => (
                      <p key={`${item.device}-${line}`}>{line}</p>
                    ))}
                  </div>
                  <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] text-emerald-800">
                    Render hash match #{item.hash}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            Layout locked across devices
          </div>
        </div>
      </section>

      <section id="final-cta" className="bg-[#101828] py-20 text-white md:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb199]">Final step</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Stop formatting. Start shipping polished documents.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Prompt once, get a clean, consistent, share-ready document every time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <HoverBorderGradient as="a" href="#">
              Start Free
            </HoverBorderGradient>
          </div>
          <p className="mt-4 text-sm text-slate-400">No credit card required.</p>
        </div>
      </section>
    </main>
  );
}
