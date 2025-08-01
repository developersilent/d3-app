"use client";
import { motion } from "motion/react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <div className="relative mb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-500/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-indigo-500/10 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          variants={fadeInVariants}
        >
          {/* Status Badge */}
          <motion.div
            className="flex items-start"
            variants={fadeInVariants}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-slate-800/80 border border-slate-600/40 rounded-2xl backdrop-blur-2xl shadow-2xl">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-slate-200 text-sm font-semibold tracking-wider">
                NEXT-GEN PLATFORM
              </span>
              <div className="w-px h-4 bg-slate-600"></div>
              <span className="text-emerald-400 text-xs font-medium">LIVE</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div className="space-y-4" variants={fadeInVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              <motion.span
                className="block bg-gradient-to-r from-white via-slate-50 to-slate-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Intelligent
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Ocean Control
              </motion.span>
              <motion.div
                className="flex items-center gap-4 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className="text-slate-400 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
                  Redefined
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
              </motion.div>
            </h1>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
            variants={fadeInVariants}
          >
            Orchestrate autonomous fleets, optimize mineral logistics, and scale
            oceanic operations through our unified intelligence platform.
          </motion.p>

          {/* Action Row */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            variants={fadeInVariants}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white rounded-2xl font-semibold text-base shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-2">
                <span>Explore</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.button>
            </motion.div>
        </motion.div>

        {/* Right Visual Element */}
        <motion.div
          className="lg:col-span-5 relative"
          variants={fadeInVariants}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-slate-800/40 via-slate-700/20 to-slate-800/40 rounded-3xl border border-slate-600/30 backdrop-blur-2xl overflow-hidden">
              {/* Animated Grid */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center backdrop-blur-sm animate-pulse">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div className="absolute top-20 right-12 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm animate-pulse delay-500">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              <div className="absolute bottom-12 left-12 w-20 h-8 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-400/30 flex items-center justify-center backdrop-blur-sm">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-3 bg-indigo-400/70 rounded-full animate-pulse delay-200"></div>
                  <div className="w-1 h-5 bg-indigo-400 rounded-full animate-pulse delay-400"></div>
                  <div className="w-1 h-2 bg-indigo-400/70 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>

              {/* Central Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-slate-800/90 border border-slate-600/50 rounded-2xl p-4 backdrop-blur-xl shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    99.9% Uptime
                  </div>
                  <div className="text-slate-400 text-xs">
                    Global Infrastructure
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-slate-800/90 border border-slate-600/50 rounded-2xl p-4 backdrop-blur-xl shadow-2xl"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    Real-time
                  </div>
                  <div className="text-slate-400 text-xs">Processing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
