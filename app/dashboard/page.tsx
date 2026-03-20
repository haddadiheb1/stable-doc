'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="flex flex-shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-5 md:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">DocPilot</p>
            <p className="text-xs text-slate-500">Editor</p>
          </div>
        </div>

        <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 sm:px-3">
          Live
        </span>
      </header>

      {/* Main Layout */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Sidebar Overlay - Mobile Only */}
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-white p-4 transition-transform duration-300 overflow-y-auto lg:relative lg:w-64 lg:translate-x-0 lg:transform-none lg:border-r lg:border-slate-200 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="space-y-4">
            {/* Workspace Section */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">Workspace</h2>
              <nav className="mt-3 space-y-2">
                <button className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
                  Existing Docs
                </button>
                <button className="w-full rounded-lg border border-blue-300 bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-200">
                  Create Docs
                </button>
              </nav>
            </div>

            {/* Documents Section */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Existing documents</p>
              <input
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="Search docs"
                type="text"
              />
              <div className="mt-2 rounded-lg border border-dashed border-slate-300 bg-white p-3 text-center">
                <p className="text-xs font-medium text-slate-700">No documents</p>
                <p className="mt-0.5 text-xs text-slate-500">Create one to start.</p>
              </div>
            </div>

            {/* Create Button */}
            <button className="w-full rounded-lg border border-blue-300 bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-200">
              + Create Document
            </button>

            {/* Placeholder for future sections */}
            <div className="border-t border-slate-200 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">account • billing • docs</p>
              <p className="mt-2 text-xs text-slate-500">Coming soon</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col overflow-hidden">
          {/* Editor Container */}
          <div className="flex flex-1 flex-col overflow-hidden p-3 sm:p-4 md:p-5">
            {/* Top Actions Bar */}
            <div className="mb-3 flex items-center justify-between gap-3 md:mb-4">
              <div className="min-w-0">
                <p className="text-xs text-slate-500">Document</p>
                <h1 className="mt-0.5 truncate text-lg font-semibold text-slate-900 sm:text-xl">Untitled Document</h1>
              </div>
              <div className="flex flex-shrink-0 gap-2">
                <button className="rounded-lg border border-slate-300 bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
                  Save
                </button>
                <button className="rounded-lg border border-emerald-300 bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100">
                  Publish
                </button>
              </div>
            </div>

            {/* Editor & Agent Grid */}
            <div className="flex flex-1 gap-3 overflow-hidden md:gap-4">
              {/* Document Editor */}
              <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Live Editor</p>
                </div>
                <textarea
                  className="flex-1 resize-none border-none p-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  placeholder="Start typing your document content here. The prompt agent on the right will help you write and edit."
                  spellCheck="true"
                />
              </div>

              {/* Prompt Agent Panel */}
              <div className="flex w-full flex-col gap-3 overflow-hidden md:w-72 lg:w-80">
                {/* Instructions Textarea */}
                <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Prompt Agent</p>
                  </div>
                  <textarea
                    className="flex-1 resize-none border-none p-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    placeholder="Tell me how to improve this document. Example: Add an introduction section with 3 key points."
                    spellCheck="true"
                  />
                  <div className="flex gap-2 border-t border-slate-200 p-3">
                    <button className="flex-1 rounded-lg border border-blue-300 bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-200">
                      Apply
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
