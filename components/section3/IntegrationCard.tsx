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

export default function IntegrationCard() {
  return (
    <motion.div
      className="group cursor-pointer"
      variants={fadeInVariants}
      whileHover={{ y: -12, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative h-full perspective-1000">
        {/* Multi-layer glow system */}
        <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>

        {/* Card with advanced materials */}
        <div className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-3xl border border-slate-700/40 rounded-3xl overflow-hidden shadow-2xl group-hover:border-blue-400/60 group-hover:shadow-blue-500/10 transition-all duration-500">
          {/* Animated border system */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
          </div>

          {/* Content with advanced spacing */}
          <div className="relative p-8 lg:p-10">
            {/* Icon with sophisticated design */}
            <div className="mb-8 relative">
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-600/15 rounded-2xl border border-blue-400/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-2xl blur-sm"></div>
                <svg
                  className="relative w-8 h-8 text-blue-300 group-hover:text-blue-200 transition-colors duration-300"
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

              {/* Orbital elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping delay-1000"></div>
            </div>

            {/* Enhanced badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 rounded-full text-blue-200 text-xs font-medium backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                Integration Hub
              </span>
            </div>

            {/* Typography with better hierarchy */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors duration-300 leading-tight">
              Unified Integration
              <span className="block text-lg font-normal text-slate-400 mt-1">
                Ecosystem
              </span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
              Connect and orchestrate your entire tech stack through intelligent
              APIs and real-time synchronization.
            </p>

            {/* Advanced feature grid */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <span>Enterprise API Gateway</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="w-6 h-6 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                </div>
                <span>Real-time Data Sync</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="w-6 h-6 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
                <span>Custom Workflow Engine</span>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-400/50 to-indigo-500/0"></div>
        </div>
      </div>
    </motion.div>
  );
}
