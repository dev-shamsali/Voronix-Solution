'use client'

import { ArrowRight, Sparkles, Code2, ShieldCheck, Rocket } from 'lucide-react'
import { useCallback } from 'react'

export default function Hero() {
  const scrollToSection = useCallback((id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* 🔥 Background Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#020b24] to-[#050816] pointer-events-none" />

      {/* 🔥 Blue Flame Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-10 w-64 h-64 rounded-full bg-[#00A8FF]/20 blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-[#24C9FF]/20 blur-3xl animate-float" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-[#005DFF]/25 blur-3xl opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
          {/* LEFT: Text Content */}
          <div className="space-y-8 animate-fade-in">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
                Igniting Digital
              </span>
              <br />
              <span className="text-white">Experiences with Code</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl">
              We architect, design, and build modern web applications that are
              fast, scalable, and ready for the future — powered by the MERN
              stack, Next.js, and cloud-native practices.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-100">
                MERN · Next.js · TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-100">
                REST APIs · Auth · Security
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/30 text-cyan-100">
                Performance & Optimization
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-[#00A8FF] to-[#005DFF] font-semibold text-sm sm:text-base shadow-lg shadow-blue-700/40 hover:shadow-blue-500/60 hover:scale-[1.03] transition-transform"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-blue-500/40 bg-blue-500/5 text-sm sm:text-base text-blue-100 hover:bg-blue-500/10 hover:border-blue-400 transition-colors"
              >
                Let&apos;s Collaborate
              </button>
            </div>
          </div>

          {/* RIGHT: Hologram / Info Panel */}
          <div className="relative animate-slide-up">
            {/* Glow behind card */}
            <div className="absolute -inset-1 bg-linear-to-tr from-[#00A8FF]/20 via-transparent to-[#005DFF]/40 blur-2xl opacity-70" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Studio Status
                  </p>
                  <p className="text-lg font-semibold text-sky-100">
                    Accepting Projects
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-linear-to-tr from-[#00A8FF] to-[#005DFF] flex items-center justify-center shadow-lg shadow-blue-700/50">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl bg-slate-900/60 border border-blue-500/20 p-4 space-y-2">
                  <Code2 className="w-5 h-5 text-blue-300" />
                  <p className="text-xs text-slate-400">Core Focus</p>
                  <p className="text-sm font-medium text-slate-100">
                    Full Stack Web Apps
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 border border-cyan-500/20 p-4 space-y-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                  <p className="text-xs text-slate-400">Built For</p>
                  <p className="text-sm font-medium text-slate-100">
                    Security & Reliability
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 border border-sky-500/20 p-4 space-y-2">
                  <Sparkles className="w-5 h-5 text-sky-300" />
                  <p className="text-xs text-slate-400">Experience</p>
                  <p className="text-sm font-medium text-slate-100">
                    Modern, Responsive UI
                  </p>
                </div>
              </div>

              <div className="mt-2 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
                <p>Based on MERN, Next.js & modern cloud-native practices.</p>
                <p className="text-blue-300 font-medium">
                  VORONIX Solutions · 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
