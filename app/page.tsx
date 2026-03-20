import { CoreInteractionSim } from "@/components/core-interaction-sim";
import { HeroDocDemo } from "@/components/hero-doc-demo";
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
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1020_0%,#0c1224_32%,#f7f6f2_32.1%,#f7f6f2_100%)] text-slate-100">
      <Spotlight className="top-[-10rem]" fill="#ff6a3d" />

      <header className="relative z-20 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 py-4 md:px-8">
          <a href="#" className="w-fit text-lg font-semibold tracking-tight text-white">
            DocPilot
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-200 transition hover:text-white">
              About
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-200 transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-200 transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex justify-end">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_30px_-18px_rgba(2,6,23,0.9)] transition duration-200 hover:border-white/55 hover:bg-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_18px_34px_-16px_rgba(2,6,23,0.9)]"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 px-5 pb-4 md:hidden">
          <a href="#about" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            About
          </a>
          <a href="#pricing" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            Pricing
          </a>
          <a href="#faq" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            FAQ
          </a>
        </div>
      </header>

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

      <section id="about" className="relative z-10 bg-[#f7f6f2] py-20 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Problem to Solution</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
            From formatting chaos to instant structure.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-700 md:text-base">
            One glance tells the story: manual editing breaks documents, prompt direction keeps them clean.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-rose-200 bg-white p-4 shadow-[0_18px_34px_-30px_rgba(127,29,29,.35)]">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">Problem</p>
                <span className="rounded-full bg-rose-100 px-2 py-1 text-[10px] font-semibold text-rose-800">Unpredictable layout</span>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-2">
                <MessyDocument />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
                <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-rose-800">Page shifts</span>
                <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-rose-800">Table breaks</span>
                <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-rose-800">Fonts drift</span>
                <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-rose-800">Device mismatch</span>
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-white p-4 shadow-[0_18px_34px_-30px_rgba(6,95,70,.35)]">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Solution</p>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-800">Deterministic output</span>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-2">
                <CleanDocument />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-800">Layout locked</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-800">Spacing stable</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-800">Tables fit</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-800">Same on all devices</span>
              </div>
            </article>
          </div>

          <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-5">
            <h3 className="text-2xl font-semibold tracking-tight">Stop editing documents. Start directing them.</h3>
            <div className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">&quot;Add intro&quot; → clean section appears</p>
              <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">&quot;Add table&quot; → fits instantly</p>
              <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">&quot;Shorten this&quot; → still formatted</p>
            </div>
          </article>
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

      <section id="pricing" className="bg-[#f7f6f2] py-16 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Pay for zero formatting pain</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-700 md:text-base">
            Simple and predictable pricing tied to how often you create documents. No token math. No per-action billing anxiety.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
            <span className="rounded-full border border-slate-300 bg-white px-3 py-1">Simple</span>
            <span className="rounded-full border border-slate-300 bg-white px-3 py-1">Predictable</span>
            <span className="rounded-full border border-slate-300 bg-white px-3 py-1">Usage-tied</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_44px_-38px_rgba(15,23,42,.9)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Free</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">$0</p>
              <p className="mt-1 text-sm text-slate-600">Try it. See how easy document creation should feel.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {[
                  "3 documents per month",
                  "Max 10 AI actions per document",
                  "PDF export with watermark",
                  "Limited templates",
                ].map((point) => (
                  <li key={`free-${point}`} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#final-cta"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Get Started
              </a>
            </article>

            <article className="relative rounded-3xl border border-emerald-300 bg-white p-6 shadow-[0_28px_54px_-38px_rgba(6,95,70,.7)]">
              <span className="absolute right-4 top-4 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Most popular
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Pro</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                $19<span className="text-base font-medium text-slate-600">/month</span>
              </p>
              <p className="mt-1 text-sm font-medium text-emerald-800">or $159/year (save ~30%)</p>
              <p className="mt-1 text-sm text-slate-600">For people who create documents regularly and want zero friction.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {[
                  "Unlimited documents",
                  "Unlimited AI actions",
                  "Clean PDF & DOCX export (no watermark)",
                  "Advanced formatting control",
                  "Priority generation speed",
                ].map((point) => (
                  <li key={`pro-${point}`} className="rounded-lg border border-emerald-200 bg-emerald-50/50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#final-cta"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-emerald-600 bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Get Started
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f7f6f2] py-16 text-slate-900 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Answers before you start</h2>
          <div className="mt-8 grid gap-4">
            {[
              {
                q: "What does DocPilot actually do?",
                a: "DocPilot lets you describe the document you want in plain language, then generates a polished file with stable structure, spacing, and pagination.",
              },
              {
                q: "Will output stay consistent across devices?",
                a: "Yes. Layout rules and pagination are locked to keep rendering identical across laptop, tablet, and phone.",
              },
              {
                q: "What file outputs are supported?",
                a: "You can export to PDF and DOCX for sharing. Free plans include watermarking, while Pro exports are clean and client-ready.",
              },
              {
                q: "How fast can I get my first document?",
                a: "Most users create their first usable draft within minutes by starting from a simple prompt and refining in a few guided actions.",
              },
            ].map((item) => (
              <article key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section> 
      <section id="final-cta" className="bg-[#101828] py-20 text-white md:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb199]">Final step</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Create your next document without touching formatting</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">No more frustration. No more wasted hours.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <HoverBorderGradient as="a" href="#final-cta">
              Try it now
            </HoverBorderGradient>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b1020] py-12 text-slate-200">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
          <div>
            <p className="text-lg font-semibold text-white">DocPilot</p>
            <p className="mt-2 max-w-xs text-sm text-slate-400">Direct your document workflow with predictable, share-ready output.</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Company</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="#about" className="text-slate-300 transition hover:text-white">
                About
              </a>
              <a href="#pricing" className="text-slate-300 transition hover:text-white">
                Pricing
              </a>
              <a href="#faq" className="text-slate-300 transition hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Legal</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="#" className="text-slate-300 transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 transition hover:text-white">
                Terms of Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
